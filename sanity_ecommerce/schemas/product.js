// creates a new schema for sanity
export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "array",
            of: [ {type: "image"}],
            options:{
                hotspot: true,
            }
        }, 
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        // a slug is a url made by sanity
        // creates a slug based on the name above
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options:{
                source: "name",
                maxLength: 90,
            }
        },
        {
            name: "price",
            title: "Price",
            type: "number",
        },
        {
            name: "details",
            title: "Details",
            type: "string",
        }
    ]
}