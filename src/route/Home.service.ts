import { Injectable } from '@nestjs/common';
import { Home } from '../components/Home';
import { renderDocument } from '../ssr/Renderer';

@Injectable()
export class HomeService {
  async home() {
    return renderDocument(Home, { text: "foo" }, process.cwd() + "/src/route/Home.browser.tsx")
  }
}
