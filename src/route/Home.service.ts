import { Injectable } from '@nestjs/common';
import { Home } from '../components/Home';
import { renderComponent } from '../ssr/Renderer';

@Injectable()
export class HomeService {
  async home() {
    return renderComponent(Home, process.cwd() + "/src/route/Home.browser.tsx")
  }
}
