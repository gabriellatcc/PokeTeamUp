import { get } from "@/src/server/users";

export default async function Home()
{
    const data = await get();
    
    return (
        <div>
            <h1>Sign in</h1>
            <div>
                <p>Page for user login</p>
            </div>  
        </div>
    );
}