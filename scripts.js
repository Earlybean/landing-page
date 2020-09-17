

document.cookie = "fileDownload=true; path=/";
$(document).ready(function () {
    $('#download-btn-desktop').click(function(e) {
        e.preventDefault();  //stop the browser from following
        var email = $("#email-desktop").val()
        if(!email) {
            return
        }
        $("#mce-EMAIL").val(email)
        $.ajax({
            url: 'how_to_raise_money_smart_kids.pdf',
            method: 'GET',
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data) {
                var a = document.createElement('a');
                var url = window.URL.createObjectURL(data);
                a.href = url;
                a.download = 'how_to_raise_money_smart_kids.pdf.pdf';
                document.body.append(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
                $("#mc-embedded-subscribe").trigger('click')
            }
        });

        $("#mc-embedded-subscribe").trigger('click')
    });

    $('#download-btn-mobile').click(function(e) {
        e.preventDefault();  //stop the browser from following
        var email = $("#email-mobile").val()
        if(!email) {
            return
        }
        $("#mce-EMAIL").val(email)
        $.ajax({
            url: 'how_to_raise_money_smart_kids.pdf',
            method: 'GET',
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data) {
                var a = document.createElement('a');
                var url = window.URL.createObjectURL(data);
                a.href = url;
                a.download = 'how_to_raise_money_smart_kids.pdf.pdf';
                document.body.append(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
                $("#mc-embedded-subscribe").trigger('click')
            }
        });

        $("#mc-embedded-subscribe").trigger('click')
    });
})