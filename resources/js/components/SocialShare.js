import React from "react";
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "react-share";

const SocialShare = () => {
    const shareUrl = "https://quran.az";
    return (
        <div className="card">
            <div className="card-body col-sm-12 inline-block">
                <FacebookShareButton className="nav-link" url={shareUrl}>
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>

                <LinkedinShareButton className="nav-link" url={shareUrl}>
                    <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>

                <TelegramShareButton className="nav-link" url={shareUrl}>
                    <TelegramIcon size={32} round={true} />
                </TelegramShareButton>

                <TwitterShareButton className="nav-link" url={shareUrl}>
                    <TwitterIcon size={32} round={true} />
                </TwitterShareButton>

                <WhatsappShareButton className="nav-link" url={shareUrl}>
                    <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
            </div>
        </div>
    );
};
export default SocialShare;
