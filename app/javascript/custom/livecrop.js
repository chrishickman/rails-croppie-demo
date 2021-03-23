function cropSample() {
    var $tag = $('#avatar-crop');
    $tag.croppie({
        viewport: {
            width: 150,
            height: 200
        },
        boundary: {
            width: 300,
            height: 300
        }
    });

    $tag .croppie('bind', {
        url: '/images/avatar-sample.png'
    });

    $('#avatar-crop').on('click', function() {
        size = 'viewport';
        $tag.croppie('result', {
            type: 'canvas',
                size: size,
                resultSize: {
                    width: 150,
                    height: 150
                }
        }).then(function (resp) {
            // save resp to database
        });
    });
}

// invoke cropSample AFTER page load
document.addEventListener('DOMContentLoaded', () => {
    new cropSample();
  });