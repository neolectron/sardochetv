import Layout from '../components/Layout/Layout.jsx';
import Card from '../components/Card/Card.jsx';
import Icon from '../components/Icon/Icon.jsx';
import Button from '../components/Button/Button.jsx';

const AddonPage = () => (
  <Layout className="items-center">
    <img src="sardoche.png" alt="logotype sardoche" className="my-12" />
    <div className="flex flex-wrap justify-center gap-8">
      <Card className="w-80 max-w-5xl">
        <div className="flex gap-8">
          <Icon name="chrome" className="h-16 sm:h-24" />
          <div className="flex-grow flex flex-col">
            <div className="text-xl flex-grow">Sardalert Chrome</div>
            <Button
              asAnchor
              reversed
              href="https://chrome.google.com/webstore/detail/sardalert/elnpfaoipdfdhikjacbpcfhpnehjjaii"
              target="_blank"
              text="Télécharger !"
              className="text-xs"
            />
          </div>
        </div>
      </Card>

      <Card className="w-80 max-w-5xl">
        <div className="flex gap-8">
          <Icon name="firefox" className="h-16 sm:h-24" />
          <div className="flex-grow flex flex-col">
            <div className="text-xl flex-grow">Sardalert Firefox</div>
            <Button
              asAnchor
              reversed
              href="https://addons.mozilla.org/en-US/firefox/addon/sardalert/"
              target="_blank"
              text="Télécharger !"
              className="text-xs"
            />
          </div>
        </div>
      </Card>
    </div>
  </Layout>
);

export default AddonPage;
