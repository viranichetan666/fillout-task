export async function getFormResponses(formId: string) {
    try {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      };      
      const res = await fetch(`${process.env.BASE_URL}/forms/${formId}/submissions`, options);
      const result = await res.json();
  
      return { success: res.status === 200, result };  
    } catch (error) {
      console.error(`Error while fetching form submissions: ${error}`);
      return {
        success: false,
        result: { message: "Error while fetching form submissions" },
      };
    }
}