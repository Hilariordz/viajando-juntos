"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";

export default function UserPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        fetchProfile(user.uid);
        fetchComments();
      } else {
        router.push("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const fetchProfile = async (uid: string) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("avatar_url")
      .eq("id", uid)
      .single();

    if (data && !error) {
      setAvatarUrl(data.avatar_url);
    }
  };

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from("comments")
      .select("*, profiles(full_name)")
      .order("created_at", { ascending: false });

    if (data && !error) {
      setComments(data);
    }
  };

  const handleUploadAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      if (!e.target.files || e.target.files.length === 0 || !user) {
        throw new Error("You must select an image to upload.");
      }

      const file = e.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${user.uid}.${fileExt}`;
      const filePath = `${fileName}`;

      // 1. Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      // 2. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from("avatars")
        .getPublicUrl(filePath);

      // 3. Update Profile in Database
      const { error: updateError } = await supabase
        .from("profiles")
        .update({ avatar_url: publicUrl })
        .eq("id", user.uid);

      if (updateError) throw updateError;

      setAvatarUrl(publicUrl);
      toast.success("¡Foto de perfil actualizada!");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment || !user) return;

    const { error } = await supabase
      .from("comments")
      .insert([{ user_id: user.uid, content: comment }]);

    if (error) {
      toast.error("Error al publicar comentario: " + error.message);
    } else {
      setComment("");
      fetchComments();
      toast.success("¡Comentario publicado!");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  if (loading) return <div className="p-8">Cargando...</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Panel de Usuario</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Cerrar Sesión
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--line)] mb-8">
        <h2 className="text-xl font-bold mb-4">Perfil</h2>
        <div className="flex items-center gap-6">
          <div className="h-24 w-24 rounded-full bg-gray-200 overflow-hidden relative">
            {avatarUrl ? (
              <img src={avatarUrl} alt="Avatar" className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-gray-400">Sin foto</div>
            )}
          </div>
          <div>
            <p className="font-bold">{user?.displayName}</p>
            <p className="text-sm text-gray-500">{user?.email}</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleUploadAvatar}
              disabled={uploading}
              className="mt-4 text-sm"
            />
            {uploading && <p className="text-xs mt-1 text-[var(--accent)]">Subiendo...</p>}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sección de Comentarios */}
        <div>
          <h2 className="text-xl font-bold mb-4">Deja un comentario</h2>
          <form onSubmit={handleAddComment} className="flex flex-col gap-4">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="¿Qué estás pensando?"
              className="w-full p-4 rounded-xl border border-[var(--line)] bg-white resize-none h-32 focus:border-[var(--primary)] outline-none"
            />
            <button
              type="submit"
              className="bg-[var(--accent)] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:-translate-y-px transition"
            >
              Publicar comentario
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Comentarios Recientes</h2>
          <div className="space-y-4">
            {comments.map((c) => (
              <div key={c.id} className="p-4 bg-white rounded-xl border border-[var(--line)]">
                <p className="font-bold text-sm text-[var(--primary)]">{c.profiles?.full_name || "Anónimo"}</p>
                <p className="mt-1 text-gray-700">{c.content}</p>
                <p className="text-[10px] text-gray-400 mt-2">
                  {new Date(c.created_at).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
