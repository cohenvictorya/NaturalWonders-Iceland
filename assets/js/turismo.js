document.addEventListener("DOMContentLoaded", function () {
    const locais = [
        { id: "map-igreja", latitude: 64.141, longitude: -21.927 },
        { id: "map-harpa", latitude: 64.150, longitude: -21.932 },
        { id: "map-lago", latitude: 64.144, longitude: -21.942 },
        { id: "map-termais", latitude: 64.108, longitude: -21.879 },
        { id: "map-museu", latitude: 64.143, longitude: -21.942 },
        { id: "map-centro", latitude: 64.147, longitude: -21.927 },
    ];

    locais.forEach((local) => {
        const mapDiv = document.getElementById(local.id);

        if (mapDiv) {
            const iframe = document.createElement("iframe");
            const lat = local.latitude;
            const lng = local.longitude;

            iframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.005},${lat - 0.005},${lng + 0.005},${lat + 0.005}&layer=mapnik&marker=${lat},${lng}`;
            iframe.width = "100%";
            iframe.height = "300";
            iframe.style.border = "0";
            iframe.allowFullscreen = true;

            mapDiv.appendChild(iframe);
        }
    });
});
