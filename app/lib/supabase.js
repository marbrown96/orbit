import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.https://ksoajoxohmkshhrqulqd.supabase.co
const supabaseAnonKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtzb2Fqb3hvaG1rc2hocnF1bHFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxMzEwNjUsImV4cCI6MjA3NzcwNzA2NX0.nwfmy1mrSWjg-lOKc2i-gU20hgNz2oSkC7ONyyV0wD8

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

