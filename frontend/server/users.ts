"use server";

interface User{
    email: string;
    id: string;
}

export const get = async (): Promise<User[]> =>{
    console.log("URL called:", `${process.env.APP_URL}/users`);
    const data = await fetch(`${process.env.APP_URL}/api/users`);
    const json = await data.json();
    return json.data;
};