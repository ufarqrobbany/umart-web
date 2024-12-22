import React, { useEffect, useState } from 'react';

function DashboardOrganization() {
  const [organizationData, setOrganizationData] = useState(null);

  useEffect(() => {
    // Ambil organizationId dari localStorage
    const organizationId = localStorage.getItem('organizationId');

    if (organizationId) {
      // Fetch data organisasi menggunakan organizationId
      fetch(`https://cfood.id/api/organizations/${organizationId}`)
        .then(response => response.json())
        .then(data => {
          if (data.status === "success") {
            setOrganizationData(data.data);
          } else {
            console.error(data.message);
          }
        })
        .catch(error => {
          console.error('Error fetching organization data:', error);
        });
    } else {
      console.error('Organization ID not found');
    }
  }, []);

  return (
    <div>
      {organizationData ? (
        <div>
          <h1>Dashboard {organizationData.name}</h1>
          {/* Render informasi organisasi lainnya */}
          <div>{organizationData.organizationName}</div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DashboardOrganization;
