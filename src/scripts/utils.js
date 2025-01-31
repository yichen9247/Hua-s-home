
import Swal from "sweetalert2";

export const openOtherSite = (url) => open(url);

export const previewImage = ({ src, html }) => {
    Swal.fire({
        imageWidth: "90%",
        showConfirmButton: false,
        html: html, imageUrl: src,
    });
}

export const isMobile = () => navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);