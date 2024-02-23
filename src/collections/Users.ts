import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    slug : "users",
    auth: {
        verify: {
            generateEmailHTML: ({token}) =>{
                return `<a href='${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}'>verify account</a>`
            }
        }
    },
    access: {
        read: () => true,
        create: () => true,
        
    },
    fields : [
        {
            name: "role",
            defaultValue: "user",
            required: true,
           
            type: "select",
            options: [
                {label: "Admin", value: "admin"},
                {label: "User", value: "user"}
            ]
        },
        {
            name: "address1",
            label:"address 1",
            required: false,
            type: 'text',
        },
        {
            name: "address2",
            label: "address 2",
            required: false,
            type: 'text',
        },
        {
            name: "city",
            label: "city",
            required: false,
            type: 'text',
        },
        {
            name: "country",
            label: "country",
            required: false,
            type: 'text',
        },
        {
            name: "zip_code",
            label: "zip code",
            required: false,
            type: 'text',
        }
    ]
}