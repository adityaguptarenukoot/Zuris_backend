import pool from "../config/dbConfig.js";

async function SaveFormData(
  fullname,
  email,
  company,
  service,
  project_details,
  phoneNumber
) {
  try {
    const query = `
      INSERT INTO contact_forms 
      (fullname, email, company, service, project_details, phone_number)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;

    const values = [
      fullname,
      email,
      company,
      service,
      project_details,
      phoneNumber
    ];

    const result = await pool.query(query, values);

    return {
      success: true,
      data: result.rows[0],
    };

  } catch (error) {
    console.error("Error saving form data:", error.message);
    throw error; // important for controller handling
  }
}

export { SaveFormData };
