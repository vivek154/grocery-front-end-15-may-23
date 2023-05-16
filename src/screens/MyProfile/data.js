import ClockSvg from "../../svg/clock.svg"
import WalletSvg from "../../svg/wallet.svg"
import StarSvg from "../../svg/star.svg"
import AtmCardSvg from "../../svg/atmcard.svg"
import NotificationSvg from "../../svg/Notification.svg"
import HeadphoneSvg from "../../svg/headphone.svg"
import LocationGreySvg from "../../svg/locationGrey.svg"


const data=[
    {
        option:"My Order",
        SVG:ClockSvg,
        goto:"OrderDetails",
    },
    {
        option:"Wallet",
        SVG:WalletSvg,
        goto:"Wallets",
    },
    {
        option:"My Payments",
        SVG:AtmCardSvg,
        goto:"PaymentOptions",
    },
    {
        option:"My Ratings & Reviews",
        SVG:StarSvg,
        goto:"RatingReviews",
    },
    {
        option:"Notifications",
        SVG:NotificationSvg,
        goto:"MainNotification",
    },
    {
        option:"Customer Service",
        SVG:HeadphoneSvg,
        goto:"CustomerService",
    },
    {
        option:"My Delivery Address",
        SVG:LocationGreySvg,
        goto:"Delivery"

    },

]

export default data