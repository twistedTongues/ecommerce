export default {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "id",
      type: "string",
      title: "Stripe API Id",
    },
    {
      name: "mainProduct",
      type: "boolean",
      title: "Is this the Main Product?",
      initialValue: false,
    },
    {
      name: "name",
      type: "string",
      title: "Product Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Product Main Image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "string",
      title: "Description",
      validation: (
        Rule,
      ) => [
        Rule.required(),
        Rule.max(500).error("Max description length is 500 symbols"),
      ],
    },
    {
      name: "slogan",
      type: "string",
      title: "Slogan of Product",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      type: "number",
      title: "Price of product",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "currency",
      type: "string",
      title: "Currency of item",
      initialValue: "USD",
    },
    {
      name: "score",
      type: "number",
      title: "Score based on reviews",
      validation: (Rule) => [
        Rule.required(),
        Rule.max(5).error("Max Score is 5"),
        Rule.min(0).error("Min score is 0"),
      ],
    },
    {
      name: "productGallery",
      type: "array",
      of: [{ type: "image" }],
      title: "Product Gallery",
    },
    {
      name: "mainProductBigPicture",
      type: "image",
      title: "Main Product Big Picture",
    },

    // ?FEATURE make this 4 sections reusable and extend this document or reference
    {
      name: "descriptionSection",
      type: "object",
      fields: [
        {
          name: "slogan",
          type: "string",
          title: "Main Product Description Slogan",
        },
        { name: "feature1", type: "string", title: "First Feature" },
        { name: "feature2", type: "string", title: "Second Feature" },
        { name: "feature3", type: "string", title: "Third Feature" },
        { name: "feature4", type: "string", title: "Fourth Feature" },
        { name: "feature5", type: "string", title: "Fifth Feature" },
        { name: "image", type: "image", title: "Image in Description Section" },
      ],
      title: "Main Product Description Section",
    },

    {
      name: "howItWorksSection",
      type: "object",
      fields: [
        { name: "description1", type: "string", title: "First Description" },
        { name: "description2", type: "string", title: "Second Description" },
        {
          name: "image",
          type: "image",
          title: "Image in How It Works Section",
        },
      ],
      title: "How It Works Section",
    },

    {
      name: "disclaimerSection",
      type: "object",
      fields: [
        { name: "slogan", type: "string", title: "Disclaimer Slogan" },
        {
          name: "description",
          type: "string",
          title: "Disclaimer Description",
        },
        { name: "disclaimer", type: "string", title: "Disclaimer" },
        {
          name: "image",
          type: "image",
          title: "Hero Image in Disclaimer Section",
        },
      ],
      title: "Disclaimer Section",
    },

    {
      name: "technologySection",
      type: "object",
      fields: [
        { name: "technology1", type: "string", title: "First Technology" },
        { name: "technology2", type: "string", title: "Second Technology" },
        { name: "technology3", type: "string", title: "Third Technology" },
        {
          name: "description1",
          type: "string",
          title: "First Technology Description",
        },
        {
          name: "description2",
          type: "string",
          title: "Second Technology Description",
        },
        {
          name: "description3",
          type: "string",
          title: "Third Technology Description",
        },
        {
          name: "image",
          type: "image",
          title: "Technology Image",
        },
      ],
      title: "Technology Section",
    },
  ],
};
