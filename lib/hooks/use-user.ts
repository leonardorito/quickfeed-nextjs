import { createClient } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";
import type { User } from "@supabase/supabase-js";

export function useUser() {
  const supabase = createClient();

  return useQuery<User | null>({
    queryKey: ["user"],
    queryFn: async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      return user;
    },
  });
}
