export default function PiHolePt1() {
  return (
    <>
      <h2 className="text-3xl text-center underline lg:text-left lg:ms-20 pt-5 font-bold pb-10">
        Setting Up Pi-hole on My NanoPi R4S: Part 1
      </h2>
      <div className="px-4 sm:max-w-screen-sm lg:max-w-screen-md mx-auto space-y-10 text-2xl pb-5">
        <img
          src="/nanoPiBoard.jpg"
          className="rounded-2xl mx-auto"
          width={400}
        />
        <p>
          I recently found out what a Pi-hole was and figured it would be a fun
          project to undertake! Pi-hole is a piece of open soure software that
          handles blocking DNS queries for you based on blocklists you provide
          it. Here was my experience setting it up in my home network:
        </p>
        <h3 className="text-3xl">Initial Steps of the Project:</h3>
        <ol>
          <li>1. ChatGPT Research</li>
          <li>2. Verify & Correct the Required Steps & Hardware</li>
          <li>3. Day of Hardware Arrival: Begin install!</li>
        </ol>
        <h3 className="text-3xl">The Installation</h3>
        <h3 className="text-3xl">1. Flashing an Operating System</h3>
        <p>
          Since Armbian is lightweight and designed for IoT-type devices, I
          decided to use it for my NanoPi R4S, which is the Raspberry Pi-like
          device I was using for this project. Flashing the OS was pretty
          straightforward -- I used the Raspberry Pi Imager if you&apos;re
          curious.
        </p>
        <h3 className="text-3xl">
          2. Connecting via SSH, Updating, & Installing Pi-hole
        </h3>
        <p>
          Once I had SSH access, I updated and upgraded the system, then
          installed Pi-hole for network-level ad and tracker blocking.
        </p>
        <h4 className="text-2xl">How Pi-hole Works:</h4>
        <ol className="space-y-4">
          <li>
            1. When you visit a webpage, ads load in the background by sending
            requests to ad-serving websites (like Google Ads and Amazon Ads).
          </li>
          <li>
            2. The Pi-hole sits as a filter before any requests go out to the
            wider internet. It checks it&apos;s blocklists to see if anything
            matches, and if it does it drops the request. This results in no ads
            being served!
          </li>
          <li>
            3. If the request has a URL not found in it&apos;s blocklist, it
            then checks it&apos;s cache if it already knows the URL. This would
            result in a speedy delivery of the IP address you want, but if not,
            then it sends the request out like normal.
          </li>
        </ol>
        <h3 className="text-3xl">
          3. Setting my Router&apos;s DNS to NanoPi —- But There&apos;s a
          Problem
        </h3>
        <p>
          This was the step where I was supposed to configure my router to use
          the NanoPi/Pi-Hole as the primary DNS, <i>but</i> my ISP&apos;s router
          didn't allow manual DNS configuration.{" "}
        </p>
        <p>
          <b>Solution:</b> Tailscale! But, more on that later. And actually, you
          might be asking what a DNS is at this point.
        </p>
        <h3 className="text-3xl">
          4. Installing Unbound for Local Recursive DNS Resolution
        </h3>
        <p>
          DNS stands for Domain Name System. Normally, when you request a URL, a
          series of DNS queries occur:
        </p>
        <ol className="space-y-4">
          <li>
            1. Your device asks a DNS server, "What is the IP of google.com?"
          </li>
          <li>
            2. That DNS server may need to ask other DNS servers through a
            series of "do you know the server that knows...", eventually
            reaching the authoritative DNS server for the domain.
          </li>
          <li>
            3. The authoritative server, the one that knows the actual answer to
            my query, provides the IP address (e.g., `8.8.8.8`), and then your
            request is completed and sent back to you, thereby allowing you to
            request the webpage you wanted!
          </li>
        </ol>
        <p>
          With Unbound, I could perform these queries directly and find the
          authortitative server on my own device, reducing reliance on the
          intermediary third-party DNS servers.
        </p>
        <h3 className="text-3xl">
          5. Adding a Firewall & VPN (And Dealing with ChatGPT&apos;s
          "Hallucinations")
        </h3>
        <p>
          ChatGPT had thrown the idea of potentially using this same NanoPi as a
          VPN & a firewall too, since it came with two ethernet ports. Some of
          the specifics of ChatGPT&apos;s plan were inaccurate, so after some of
          my own research, I came to two conclusions:
        </p>
        <ul className="space-y-4">
          <li>
            - <b>UFW (Uncomplicated Firewall)</b> for basic firewall rules.
          </li>
          <li>
            - <b>Tailscale</b>, which meant including the NanoPi in my
            pre-existing tailnet and using Tailscale's Mullvad VPN exit node
            add-on!
          </li>
        </ul>
        <p>
          Mullvad&apos;s VPN setup was simple -- just a few clicks after
          subscribing, and I could route any traffic from my tailnet through
          their servers.
        </p>
        <p>
          You can never fully trust these LLMs. While setting up UFW, I had to
          open specific ports for Pi-hole&apos;s web UI and Tailscale. This was
          a fun learning experience -— much more enjoyable than my later
          experiments with iptables. (Small foreshadowing!)
        </p>
        <h3 className="text-3xl">The Project Was a Success! (Until…)</h3>
        <p>
          At this point, I was happy. Pi-hole and Unbound worked great, I had a
          functional software firewall, and as a bonus, I even looked into and
          bumped my router&apos;s firewall setting from "Low" to "Medium."
        </p>
        <p>Then came an issue.</p>
        <h3 className="text-3xl">The Unexpected Network Problem</h3>
        <p>
          The cabling in my apartment has been a mess since I moved in. When I
          asked management to fix it, they said, "Not our responsibility, it's
          the ISP." When setting up my VM server, I had to go through seven
          trial-and-error attempts to find the right Ethernet cable in my media
          closet. Not fun -— but the very last one worked!
        </p>
        <p>
          Since I wanted my VMs to have a stable connection, I couldn&apos;t
          rely on the cheap USB Wi-Fi dongle the computer came with. My NanoPi
          was supposed to help by providing that extra LAN port, as it had taken
          the spot that the Ethernet cable previously occupied on my router.
          Except... when I plugged in the Ethernet cable to connect my VM server
          through the NanoPi, it <b>didn't work</b>.
        </p>
        <p>
          So, my project suddenly had a new phase:{" "}
          <b>troubleshooting my home network.</b> One simple Google search was
          not going to be enough…
        </p>
        <hr></hr>
        <p>
          Stay tuned for{" "}
          <a href="/project/piHolePt2" className="font-bold underline">
            Part 2
          </a>
          , where I dive into diagnosing and fixing this unexpected networking
          challenge!
        </p>
      </div>
    </>
  );
}
