function cropSample() {
    var $tag = $('#avatar-crop');
    $tag.croppie({
        enableExif: true,
        viewport: {
            width: 150,
            height: 200
        },
        boundary: {
            width: 300,
            height: 300
        }
    });

    var file = $('#attachment').get(0).files[0];
    
    if(file){
        var reader = new FileReader();
        
        reader.onload = function(){
            $tag.croppie('bind', {
                url: reader.result
            });
        }

        reader.readAsDataURL(file);
    }
    else{
        $tag.croppie('destroy');
    }

    $('#avatar-crop').on('click', function() {
        size = 'viewport';
        $tag.croppie('result', {
            type: 'blob',
                size: size,
                resultSize: {
                    width: 150,
                    height: 150
                }
        }).then(function (resp) {
            this.addImage(new File([resp], 'avatar'))
            this.croppie.destroy()
            
        });
    });
    function addImage(file) {
        this.imageFile = file;
        let that = this;
        var reader = new FileReader();
        reader.onload = (e1) => {
          that.imageTarget.src = e1.target.result
        }
        reader.readAsDataURL(file)
        this.imageTarget.classList.remove("hidden")
      }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('attachment').onchange = function(){new cropSample();};
  });