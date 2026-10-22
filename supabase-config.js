// Supabase configuration
// Replace with your actual Supabase project URL and anon key
const SUPABASE_URL = 'https://lvfwbadtwyjajgpyvoob.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2ZndiYWR0d3lqYWpncHl2b29iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2NzAwMDUsImV4cCI6MjEwODI0NjAwNX0.VO7QrFIDLmJw_I6wXMBhBq8a6UdseDN5ZGpfPhy4ZSg';

window.supabaseClient = null;

function initSupabase() {
    if (typeof window.supabase !== 'undefined') {
        window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        return true;
    }
    return false;
}

if (!initSupabase()) {
    document.addEventListener('DOMContentLoaded', initSupabase);
}