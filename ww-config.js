export default {
  editor: {
    label: {
      en: "PDF viewer",
    },
    icon: 'document-report',
  },
  properties: {
    pdf: {
      label: { en: "PDF Url", fr: "PDF Url" },
      type: "Text",
      options: {
        placeholder: "PDF url",
      },
      defaultValue:
        "https://bsiybqzphvbftfzexyhc.supabase.co/storage/v1/object/public/bill_documents/docs/59312_6076.pdf",
      bindable: true,
    },
    search: {
      label: { en: "search", fr: "search" },
      type: "Text",
      options: {
        placeholder: "search",
      },
      id:"idConfig.findInput",
      defaultValue:"member",
      bindable: true,
    },
  },
  
};
