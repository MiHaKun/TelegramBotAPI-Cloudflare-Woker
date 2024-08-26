/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
    const auths = ['xxxxxxxxxxxx', 'yyyyyyyyyyyy']
    const key = request.headers.get("Key");
    console.log('key is ' + key)
    if (!auths.includes(key)){
      return new Response('{"ok": flase, "error_code": 423, "description":"bad key"}');
    }

    const my_url = new URL(request.url);
    const token = request.headers.get("bot_token")
    var offical_url = "https://api.telegram.org/bot" + token + my_url.pathname;
    console.log(offical_url);


    const modifiedRequest = new Request(offical_url, {
      headers: new Headers(request.headers),
      method: request.method,
      body: request.body,
      redirect: 'follow'
    });
  
    const response = await fetch(modifiedRequest);
    const modifiedResponse = new Response(response.body, response);
  
    // 添加允许跨域访问的响应头
    modifiedResponse.headers.set('Access-Control-Allow-Origin', '*');
    
    return modifiedResponse;
  },
};
