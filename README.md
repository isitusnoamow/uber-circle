# Uber Circle

In order to run you need your own supabase account and project.  
Use the SQL editor and run the user management template.  
Create a file .env.local at the root of the project which is formatted as follows and fill the secrets with the info you find in the API settings of the project
    
    NEXT_PUBLIC_SUPABASE_URL=
    NEXT_PUBLIC_SUPABASE_ANON_KEY=
    
Then run the following commands

    npm install
    npm run dev

And the app should now be accessible at localhost:3000