const form = document.getElementById("form");
const email = document.getElementById("email");
const nrp = document.getElementById("nrp");
const nama = document.getElementById("nama");
const alamat = document.getElementById("alamat");
const departemen = document.getElementById("departemen");
const ketVaksin = document.getElementById("ket-vaksin");
const jenis = document.getElementById("jenis");
const dosis = document.getElementById("dosis");
const noSertifikat = document.getElementById("no-sertif");
const alasan = document.getElementById("alasan");
let isFormValid = 1;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
    if (isFormValid == 1) {
        Swal.fire(
            'Good job!',
            'Form Submitted!',
            'success'
        )
    } else {
        isFormValid = 1;
    }
});

function checkInputs() {
    //get input
    const nrpValue = nrp.value.trim();
    const emailValue = email.value.trim();
    const namaValue = nama.value.trim();
    const alamatValue = alamat.value.trim();
    const ketVaksinValue = ketVaksin.value.trim();
    const departemenValue = departemen.value.trim();
    const jenisValue = jenis.value.trim();
    const dosisValue = dosis.value.trim();
    const noSertifikatValue = noSertifikat.value.trim();
    const alasanValue = alasan.value.trim();
    if (nrpValue === "") {
        setErrorFor(nrp, "NRP tidak boleh kosong");
    } else {
        setSuccessFor(nrp);
    }
    if (namaValue === "") {
        setErrorFor(nama, "Nama tidak boleh kosong");
    } else {
        setSuccessFor(nama);
    }
    if (alamatValue === "") {
        setErrorFor(alamat, "Alamat tidak boleh kosong");
    } else {
        setSuccessFor(alamat);
    }
    if (departemenValue === "0") {
        setErrorFor(departemen, "Pilih departemen Anda");
    } else {
        setSuccessFor(departemen);
    }
    if (ketVaksinValue === "0") {
        setErrorFor(ketVaksin, "Pilih salah satu");
    } else if (ketVaksinValue === "1") {
        setSuccessFor(ketVaksin);
        if (jenisValue === "0") {
            setErrorFor(jenis, "Pilih salah satu");
        } else {
            setSuccessFor(jenis);
        }
        if (dosisValue === "") {
            setErrorFor(dosis, "Dosis tidak boleh kosong");
        } else {
            setSuccessFor(dosis);
        }
        if (noSertifikatValue === "") {
            setErrorFor(noSertifikat, "No. sertifikat tidak boleh kosong");
        } else {
            setSuccessFor(noSertifikat);
        }
    } else if (ketVaksinValue === "2") {
        setSuccessFor(ketVaksin);
        if (alasanValue === "0") {
            setErrorFor(alasan, "Pilih salah satu");
        } else {
            setSuccessFor(alasan);
        }
    }
    if (emailValue === "") {
        setErrorFor(email, "Email tidak boleh kosong");
    } else if (!emailValue) {
        setErrorFor(email, "Email tidak valid");
    } else {
        setSuccessFor(email);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    isFormValid = 0;
    if (isFormValid == 0) {
        console.log(message);
    }
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

function isVaksin() {
    ketVaksinValue = document.getElementById("ket-vaksin").value.trim();
    document.getElementById("sudah-vaksin").style.display = "none";
    document.getElementById("belum-vaksin").style.display = "none";
    if (ketVaksinValue == "1") {
        document.getElementById("sudah-vaksin").style.display = "block";
        document.getElementById("belum-vaksin").style.display = "none";
    } else if (ketVaksinValue == "2") {
        document.getElementById("sudah-vaksin").style.display = "none";
        document.getElementById("belum-vaksin").style.display = "block";
    }
}