//flowbyte components imports
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
//flowbyte components imports

function FooterComponent() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              href="https://flowbite.com"
              src="./logo.png"
              alt="Flowbite Logo"
              name="Innovative Smartmandu (ISM)"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="about" />
              <FooterLinkGroup col>
                <FooterLink href="#">ISM</FooterLink>
                <FooterLink href="#">Portfolio</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink
                  href="https://github.com/iSM-Innovative-Smartmandu"
                  target="_blank"
                >
                  Github
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Innovative Smartmandu™" year={year} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon
              href="https://www.facebook.com/ismartmandu"
              target="_blank"
              icon={BsFacebook}
            />
            <FooterIcon
              href="https://www.instagram.com/ismartmandu2019/"
              target="_blank"
              icon={BsInstagram}
            />
            <FooterIcon href="#" target="_blank" icon={BsTwitter} />
            <FooterIcon
              href="https://github.com/iSM-Innovative-Smartmandu"
              target="_blank"
              icon={BsGithub}
            />
            <FooterIcon href="#" target="_blank" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;
