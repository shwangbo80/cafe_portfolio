const myModal = document.getElementById("myModal")
const myInput = document.getElementById("myInput")

// myModal.addEventListener("shown.mdb.modal", () => {
//     myInput.focus()
// })

// $(document).ready(function () {
//     $("#heart").click(function () {
//         if ($("#heart").hasClass("liked")) {
//             $("#heart").html('<i class="fa fa-heart-o" aria-hidden="true"></i>')
//             $("#heart").removeClass("liked")
//         } else {
//             $("#heart").html('<i class="fa fa-heart" aria-hidden="true"></i>')
//             $("#heart").addClass("liked")
//         }
//     })
// })

$(".heart.fa").click(function () {
    $(this).toggleClass("fa-heart fa-heart-o")
})
