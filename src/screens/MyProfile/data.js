import ClockSvg from "../../svg/clock.svg"
import WalletSvg from "../../svg/wallet.svg"
import StarSvg from "../../svg/star.svg"
import AtmCardSvg from "../../svg/atmcard.svg"
import NotificationSvg from "../../svg/Notification.svg"
import HeadphoneSvg from "../../svg/headphone.svg"
import LocationGreySvg from "../../svg/locationGrey.svg"


const data=[
    {
        option:"My Orders",
        SVG:ClockSvg,
        goto:"MyCartPage",
    },
    {
        option:"Wallet",
        SVG:WalletSvg,
        goto:"PaymentOptions",
    },
    {
        option:"My Payments",
        SVG:AtmCardSvg,
        goto:"PaymentOptions",
    },
    {
        option:"My Ratings & Reviews",
        SVG:StarSvg,
    },
    {
        option:"Notifications",
        SVG:NotificationSvg,
        goto:"MainNotification",
    },
    {
        option:"Customer Service",
        SVG:HeadphoneSvg,
        goto:"MainNotification",
    },
    {
        option:"My Delivery Adress",
        SVG:LocationGreySvg,
        goto:"Delivery"

    },

]

export default data