"use client";

import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Verificar si el correo es el del administrador
        if (user.email === "adminviajes@gmail.com") {
          setUser(user);
          fetchPhotos();
        } else {
          // Si no es el admin, redirigir al panel de usuario normal
          toast.error("Acceso denegado. No tienes permisos de administrador.");
          router.push("/user");
        }
      } else {
        router.push("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const fetchPhotos = async () => {
    const { data, error } = await supabase
      .from("photos")
      .select("*")
      .order("created_at", { ascending: false });

    if (data && !error) {
      setPhotos(data);
    }
  };

  const handleUploadPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      if (!e.target.files || e.target.files.length === 0 || !user) {
        throw new Error("Selecciona una imagen para subir.");
      }

      const file = e.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `admin-uploads/${fileName}`;

      // 1. Subir a Supabase Storage (bucket 'photos')
      const { error: uploadError } = await supabase.storage
        .from("photos")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // 2. Obtener URL Pública
      const { data: { publicUrl } } = supabase.storage
        .from("photos")
        .getPublicUrl(filePath);

      // 3. Guardar en la tabla 'photos'
      const { error: insertError } = await supabase
        .from("photos")
        .insert([
          { 
            url: publicUrl, 
            description: description, 
            uploaded_by: user.uid 
          }
        ]);

      if (insertError) throw insertError;

      setDescription("");
      fetchPhotos();
      toast.success("¡Foto subida con éxito!");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setUploading(false);
    }
  };

  if (loading) return <div className="p-8">Cargando...</div>;

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Panel de Administración</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulario de Subida */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-[var(--line)]">
          <h2 className="text-xl font-bold mb-4">Subir Nueva Foto</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Escribe algo sobre esta foto..."
                className="w-full p-3 rounded-xl border border-[var(--line)] bg-gray-50 focus:border-[var(--primary)] outline-none resize-none h-24"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Imagen</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleUploadPhoto}
                disabled={uploading}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[var(--primary-light)] file:text-[var(--primary)] hover:file:bg-indigo-100"
              />
            </div>
            {uploading && <p className="text-sm text-[var(--accent)] animate-pulse">Subiendo fotografía...</p>}
          </div>
        </div>

        {/* Galería de Fotos Subidas */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">Galería del Admin</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo) => (
              <div key={photo.id} className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 border border-[var(--line)]">
                <img
                  src={photo.url}
                  alt={photo.description}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
                {photo.description && (
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-3">
                    <p className="text-white text-xs line-clamp-2">{photo.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          {photos.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-2xl border-2 border-dashed border-[var(--line)]">
              <p className="text-gray-400">No hay fotos subidas aún.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
