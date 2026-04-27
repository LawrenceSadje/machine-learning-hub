import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jjzfabolbgdflkkvgoah.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqemZhYm9sYmdkZmxra3Znb2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0NTkwOTcsImV4cCI6MjA5MTAzNTA5N30.034920VvxdbLPNBky_ZdO_YwAG_63nReBakXz8FJoik'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
