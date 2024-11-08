// Import the necessary Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkA-g2xDMKxIjFAKm0rx7He0USiLI1Noc",
  authDomain: "web-undangan-42f23.firebaseapp.com",
  projectId: "web-undangan-42f23",
  storageBucket: "web-undangan-42f23.appspot.com",
  messagingSenderId: "17080874518",
  appId: "1:17080874518:web:2d777ba3f7003e1b432737",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to save form data
async function saveFormData(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value;
  const status = document.getElementById("status").value;
  const pesan = document.getElementById("pesan").value;

  try {
    await addDoc(collection(db, "invitations"), {
      nama: nama,
      status: status,
      pesan: pesan,
      timestamp: new Date(),
    });

    alert("Data berhasil disimpan!");
    document.getElementById("formSubmit").reset();
    fetchData(); // Refresh carousel data
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Gagal menyimpan data, coba lagi.");
  }
}

// Function to fetch and display data from Firestore in Owl Carousel
async function fetchData() {
  const dataCarousel = document.getElementById("dataCarousel");
  dataCarousel.innerHTML = ""; // Clear previous data

  try {
    const querySnapshot = await getDocs(collection(db, "invitations"));

    // Loop through each document and add data to carousel
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      dataCarousel.innerHTML += `
    
        <div class="card p-3 mt-5" >
            <p><strong>Nama:</strong> ${data.nama}</p>
            <p><strong>Status Kehadiran:</strong> ${
              data.status === "1"
                ? '<i class="fa-solid fa-square-check text-success"></i>'
                : "Tidak hadir"
            }</p>
            <p><strong>Pesan:</strong> "${data.pesan}"</p>
            <p><strong>Timestamp:</strong> ${data.timestamp
              .toDate()
              .toLocaleString()}</p>
        </div>
      
      `;
    });

    // Reinitialize Owl Carousel after data is added
    $(".owl-carousel").owlCarousel({
      loop: false,
      margin: 30,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  } catch (error) {
    console.error("Error fetching documents: ", error);
  }
}

// Add event listener to the form
document.getElementById("formSubmit").addEventListener("submit", saveFormData);

// Fetch data when the page loads
fetchData();
