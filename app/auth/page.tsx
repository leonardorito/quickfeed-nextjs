"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "@/lib/supabase";
import { authSchema, type AuthFormData } from "@/lib/validations/auth";
import { Logo } from "@/components/ui/logo";
import { Card, CardContent, CardHeader, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AuthForm } from "@/components/auth-form";

export default function AuthPage() {
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const form = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
    defaultValues: { email: "", password: "" },
  });

  const { handleSubmit, formState: { errors, isSubmitting }, reset } = form;

  const onTabChange = (value: string) => {
    setTab(value as "login" | "signup");
    setError(null);
    setSuccess(null);
    reset();
  };

  const onSubmit = async (data: AuthFormData) => {
    setError(null);
    setSuccess(null);

    try {
      if (tab === "signup") {
        const { error } = await supabase.auth.signUp(data);
        if (error) throw error;
        setSuccess("Check your email for a confirmation link!");
      } else {
        const { error } = await supabase.auth.signInWithPassword(data);
        if (error) throw error;
        router.push("/dashboard");
      }
    } catch (err: unknown) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card variant="elevated" className="w-full max-w-md">
        <CardHeader className="items-center space-y-3">
          <Logo size="lg" />
          <CardDescription>
            {tab === "login"
              ? "Sign in to your account"
              : "Create a new account"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs value={tab} onValueChange={onTabChange}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <AuthForm
                onSubmit={handleSubmit(onSubmit)}
                form={form}
                errors={errors}
                isSubmitting={isSubmitting}
                error={error}
                success={success}
                submitLabel="Login"
              />
            </TabsContent>

            <TabsContent value="signup">
              <AuthForm
                onSubmit={handleSubmit(onSubmit)}
                form={form}
                errors={errors}
                isSubmitting={isSubmitting}
                error={error}
                success={success}
                submitLabel="Sign Up"
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

