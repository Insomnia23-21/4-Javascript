const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar.",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a",
    descripcion: "Condominio elegante en una tranquila zona residencial.",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa pequeña en los suburbios de la ciudad",
    src: "https://images1.forrent.com/i2/y9GpnKXoszqOefPw6R3BOZsIwHW3dQws0Rsw13Ht5xo/117/image.jpg",
    descripcion:
      "Casa pequeña para parejas en tranquilo suburbio de la ciudad.",
    ubicacion: "4660 Kester Ave, Los Angeles, CA 91403",
    habitaciones: 1,
    costo: 1850,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa familiar con amplio jardín",
    src: "https://images1.forrent.com/i2/DmTkMOQYjGwFwtgNcRRXSaI7UmtqYU91etNOwL6DQ6E/117/image.jpg",
    descripcion: "Casa familiar con amplio espacio para una vida ajetreada.",
    ubicacion: "17651 Hamlin St, Los Angeles, CA 91406",
    habitaciones: 3,
    costo: 3500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Acoguedora casa en el borde costero",
    src: "https://images1.forrent.com/i2/6_-5CFrU_gcvQe4z6IhFCO-_vAafYS6-LnwogKCpaic/117/image.jpg",
    descripcion: "Casa acogedora a pasos de la playa.",
    ubicacion: "2260 Beachwood Dr, Los Angeles, CA 90068",
    habitaciones: 1,
    costo: 1590,
    smoke: true,
    pets: false,
  },
];

const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: "Apartamento de lujo en una zona exclusiva.",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion: "Este apartamento está ubicado en una zona montañosa.",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion: "Penthouse con terraza panorámica.",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa mediterranea en los suburbios",
    src: "https://img.chime.me/imageemb/mls-listing/500/V1-23060/05becd7d/1713453096/h900_original_LMjNboMgHADwJ9K_xIWx3XSYLEbE6JZsp8UgYfhRKNIqPH0vvf7-vbf7O8BodeKd3P0qU2GcXI3SIhVmg6cCk5Me4aNnzQCdM1Y6H6D75F88ma1UgDL8htELxgQQsHkJTayOdiCBFcDm4s6pyvlAzjZWsaXfkdHiBLJhhcPvBTU2iWOdX2mNluNH3iaR9ZqVKghc-v01_JFHAAAA__8.jpg",
    descripcion: "Casa mediana en los suburbios de la ciudad.",
    ubicacion: "2476 Chandler AVE #4, Simi Valley, CA 93065",
    habitaciones: 3,
    costo: 6000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa familiar de color azul",
    src: "https://img.chime.me/imageemb/mls-listing/500/V1-23103/532a2048/1713646209/h900_original_LMjdToUgHADwJzrnf6gOanesrLb4sHBaV80UDZTBkKXy9N10-_uJ0a_3AJ3XpxjUGhd17l1Qi5t0f-6dhX8FpgbdwcM7oxKq4LwK8YDqRdTiZLyaAF1wkV0vxR0GBMzMB03lxmV-MALMkF_xON0Kme88lYmbtxtmyA7oGWWv5LvDmvERWytc8TQ049xYet0-24-m_qopTq3c3F8AAAD__w.jpg",
    descripcion: "Casa mediana en las afueras de la ciudad.",
    ubicacion: "459 Algonquin DR, Simi Valley, CA 93065",
    habitaciones: 3,
    costo: 8000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa grande en exclusivo suburbio de la ciudad",
    src: "https://img.chime.me/imageemb/mls-listing/471/224001481/2573be32/1713536466/h900_original_HMABDoUgCADQE31QP-XsNo5WrjKYsM7f1mvuagsirzdoExcD0zpOvapvMjqwdHwYU0gUKJZIkaaSac7_FD4_gUP3NwAA__8.jpg",
    descripcion: "Gran casa con portico automático.",
    ubicacion: "1407 Parkhurst Street, Simi Valley, CA 93065",
    habitaciones: 4,
    costo: 10000,
    smoke: false,
    pets: false,
  },
];

function mostrarPropiedades(propiedades, contenedor) {
  const contenedorElement = document.getElementById(contenedor);
  let html = "";

  propiedades.forEach((propiedad) => {
    html += `
            <div class="col-md-4">
            <div class="card">
                <img src="${
                  propiedad.src
                }" class="card-img-top" alt="Imagen de la propiedad">
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${
                      propiedad.ubicacion
                    }</p>
                    <p><i class="fas fa-bed"></i> ${
                      propiedad.habitaciones
                    } Habitaciones</p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                    <p class="${
                      propiedad.smoke ? "text-success" : "text-danger"
                    }">
                        <i class="${
                          propiedad.smoke
                            ? "fas fa-smoking"
                            : "fas fa-smoking-ban"
                        }"></i> 
                        ${
                          propiedad.smoke
                            ? "Permitido fumar"
                            : "No se permite fumar"
                        }
                    </p>
                    <p class="${
                      propiedad.pets ? "text-success" : "text-danger"
                    }">
                        <i class="${
                          propiedad.pets ? "fas fa-paw" : "fas fa-ban"
                        }"></i> 
                        ${
                          propiedad.pets
                            ? "Mascotas permitidas"
                            : "No se permiten mascotas"
                        }
                    </p>
                </div>
            </div>
            </div>
        `;
  });

  contenedorElement.innerHTML = html;
}

// Cargar propiedades en sus respectivos contenedores
document.addEventListener("DOMContentLoaded", () => {
  // Mostrar propiedades en alquiler
  mostrarPropiedades(propiedades_alquiler, "contenedor-alquiler");
});

document.addEventListener("DOMContentLoaded", () => {
  // Mostrar propiedades en venta
  mostrarPropiedades(propiedades_venta, "contenedor-venta");
});
