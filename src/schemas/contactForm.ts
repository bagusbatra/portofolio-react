import { z } from "zod";

export const PROJECT_TYPES = [
  "SIS",
  "Village Portal",
  "ERP",
  "API Service",
  "Consulting",
  "Other",
] as const;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Nama harus diisi minimal 2 karakter")
    .max(100, "Nama terlalu panjang"),
  email: z
    .string()
    .min(1, "Email harus diisi")
    .email("Format email tidak valid"),
  company: z.string().optional(),
  projectType: z.enum(PROJECT_TYPES, { message: "Pilih tipe proyek" }),
  message: z
    .string()
    .min(10, "Pesan harus diisi minimal 10 karakter")
    .max(2000, "Pesan terlalu panjang"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
