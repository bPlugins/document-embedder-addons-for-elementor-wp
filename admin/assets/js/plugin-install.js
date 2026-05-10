(function($) {
    'use strict';

    function sendRequest(action, $btn, successText) {
        $btn.attr('disabled', true).text('Processing...');
        $.ajax({
            url: deafeInstall.ajax_url,
            type: 'POST',
            dataType: 'json',
            data: {
                action: action,
                nonce: deafeInstall.nonce
            },
            success: function(response) {
                if (response.success) {
                    $btn.text(successText);
                    setTimeout(() => location.reload(), 500); 
                } else {
                    $btn.text('Error: ' + response.data);
                }
            },
            error: function(xhr, status, error) {
                console.error(error);
                $btn.text('Request failed!');
            }
        });
    }

    $(document).on('click', '#deafe-install-elementor', function(e) {
        e.preventDefault();
        sendRequest('deafe_install_plugin', $(this), 'Installed!');
    });

    $(document).on('click', '#deafe-activate-elementor', function(e) {
        e.preventDefault();
        sendRequest('deafe_activate_plugin', $(this), 'Activated!');
    });

})(jQuery);
