console.log("Website loaded");

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://bzcarceljgdwdqlcbotl.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_VNz-PocQFPrNjsap1Asw2g_s7-AkKb4";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
