$notification.post("Emby Premiere Script Start!");
if ($request.url.indexOf('mb3admin.com/admin/service/registration/validateDevice') !== -1) {
    if ($response.status !== 200) {
        $notification.post("Emby Premiere Unlocked!");
        $done({
            status: 200,
            headers: $response.headers,
            body: '{"cacheExpirationDays": 999, "resultCode": "GOOD", "message": "Device Valid", "isPremiere": true}'
        });
    } else {
        $notification.post("Emby Premiere Expired!");
        $done({});
    }
} else {
    $notification.post("Emby Premiere Error!");
    $done({});
}
$notification.post("Emby Premiere Script End!");