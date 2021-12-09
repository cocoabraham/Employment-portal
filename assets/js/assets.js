

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/*Función de modals*/
$('.loginModal').on('click', function (e) {
    e.preventDefault();
    $('#Modal').modal('show').find('.modal-body').load($(this).attr('href'));
});
$('.loginReg').on('click', function (e) {
    e.preventDefault();
    $('#Modal').modal('show').find('.modal-body').load($(this).attr('href'));
});
$('.loginReg').on('click', function (e) {
    e.preventDefault();
    $('#Modal').modal('show').find('.modal-body').load($(this).attr('href'));
});
/*Función de modals*/
/*back button*/
function goBack() {
    window.history.back();
}
/*back button*/
/*file upoad*/
// Add the following code if you want the name of the file appear on select
$(".custom-file-input").on("change", function () {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});
//file upload

//date picker
$('.datepicker').datepicker({
    uiLibrary: 'bootstrap4',
    locale: 'es-es',
});
//date picker

//date picker
$('#Studies').on('click', '#addStudies', function () {
    $(this).closest('#studiesRow').clone().appendTo('#Studies').find("input[type='text']").val(""); //use closest to avoid multiple selection and clear input text elements
});
$('#otherStudies').on('click', '#addOtherStudies', function () {
    $(this).closest('#otherStudiesRow').clone().appendTo('#otherStudies').find("input[type='text']").val(""); //use closest to avoid multiple selection and clear input text elements
});
$('#tools').on('click', '#addTools', function () {
    $(this).closest('#toolsRow').clone().appendTo('#tools').find("input[type='text']").val(""); //use closest to avoid multiple selection and clear input text elements
});
$('#lang').on('click', '#addLang', function () {
    $(this).closest('#langRow').clone().appendTo('#lang').find("input[type='text']").val(""); //use closest to avoid multiple selection and clear input text elements
});
$('#experience').on('click', '#addExperience', function () {
    $(this).closest('#experienceRow').clone().appendTo('#experience').find("input[type='text']").val(""); //use closest to avoid multiple selection and clear input text elements
});


jQuery(function ($) {

    $('#tags1 input').on('focusout', function () {
        var txt = this.value.replace(/[^a-zA-Z0-9\+\-\.\#]/g, ''); // allowed characters list
        if (txt) $(this).before('<span class="tag">' + txt + '</span>');
        this.value = "";
        this.focus();
    }).on('keyup', function (e) {
        // comma|enter (add more keyCodes delimited with | pipe)
        if (/(188|13)/.test(e.which)) $(this).trigger('focusout');
    });

    $('#tags1').on('click', '.tag', function () {
        if (confirm("¿Realmente deseas borrar la competencia?")) $(this).remove();
    });

});

jQuery(function ($) {

    $('#tags2 input').on('focusout', function () {
        var txt = this.value.replace(/[^a-zA-Z0-9\+\-\.\#]/g, ''); // allowed characters list
        if (txt) $(this).before('<span class="tag">' + txt + '</span>');
        this.value = "";
        this.focus();
    }).on('keyup', function (e) {
        // comma|enter (add more keyCodes delimited with | pipe)
        if (/(188|13)/.test(e.which)) $(this).trigger('focusout');
    });

    $('#tags2').on('click', '.tag', function () {
        if (confirm("¿Realmente deseas borrar la competencia?")) $(this).remove();
    });

});

    $( document ).ready(function() {
        $('.tag_list').click(function () {
            var id = $(this).data('id');
            $(this).addClass('tag_list_hide');
        });
    });






/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}