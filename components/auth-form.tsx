"use client";

import type React from "react";
import type { useForm } from "react-hook-form";
import type { AuthFormData } from "@/lib/validations/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2 } from "lucide-react";

type Props = {
  onSubmit: React.ComponentProps<"form">["onSubmit"];
  form: ReturnType<typeof useForm<AuthFormData>>;
  errors: ReturnType<typeof useForm<AuthFormData>>["formState"]["errors"];
  isSubmitting: boolean;
  error: string | null;
  success: string | null;
  submitLabel: string;
};

export function AuthForm({
  onSubmit,
  form,
  errors,
  isSubmitting,
  error,
  success,
  submitLabel,
}: Readonly<Props>) {
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4 pt-4">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert>
          <CheckCircle2 className="h-4 w-4" />
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}

      <Input
        type="email"
        label="Email"
        placeholder="you@example.com"
        error={errors.email?.message}
        {...form.register("email")}
      />

      <Input
        type="password"
        label="Password"
        placeholder="At least 6 characters"
        error={errors.password?.message}
        {...form.register("password")}
      />

      <Button type="submit" loading={isSubmitting} className="w-full">
        {submitLabel}
      </Button>
    </form>
  );
}
