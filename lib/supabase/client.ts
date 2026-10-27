import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://lxkkpbwaiigkxqskdysf.supabase.co";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4a2twYndhaWlna3hxc2tkeXNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI4NDM3OTIsImV4cCI6MjEwODQxOTc5Mn0.iy4-sKHQHLepkdRPHtSEFrwl8_V3Q7fky4MQVtBLqE8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
