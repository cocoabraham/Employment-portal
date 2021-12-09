    $(function() {
      // bind change event to select
      $modal = $('#LoginRegister');
      if ($(this).val() === 'LoginRegister') {
        $modal.modal('show');
      } else {
        $('#designselectedchange').on('change', function() {
          var url = $(this).val(); // get selected value
          if (url) { // require a URL
            window.location = url; // redirect
          }
          return false;
        });
      }
    });