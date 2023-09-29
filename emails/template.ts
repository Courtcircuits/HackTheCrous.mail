import Index from "./index"
import { render } from '@react-email/render';


const html = render(Index({}), {
  pretty: true,
});

console.log(html)