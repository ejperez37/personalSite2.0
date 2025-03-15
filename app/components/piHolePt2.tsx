export default function PiHolePt2() {
  return (
    <>
      <h2 className="text-3xl text-center underline lg:text-left lg:ms-20 pt-5 font-bold pb-10">
        Setting Up Pi-hole on My NanoPi R4S: Part 2
      </h2>
      <div className="px-4 sm:max-w-screen-sm lg:max-w-screen-md mx-auto space-y-10 text-2xl pb-5">
        <p className="text-center underline text-xl pb-5 visible sm:hidden">
          For best viewing, access on desktop or tablet!
        </p>
        <img
          src="/nanoPiInHand.jpg"
          className="rounded-2xl mx-auto"
          width={400}
        />
        <p>
          With my NanoPi (which has Pi-hole, Unbound, and UFW set up) running
          smoothly, it was time to figure out how to get an Ethernet connection
          to my VM server amidst the mess that was my apartment&apos;s network
          cabling. I <i>could</i> call my ISP and have them send a technician
          over, but where would the fun in that be?
        </p>
        <p>
          (If you haven't yet, check out{" "}
          <a href="/project/piHolePt1" className="underline font-bold">
            Part 1 here!
          </a>
          )
        </p>
        <h3 className="text-3xl">Diagnosing the Network Issue</h3>
        <p>
          First, I made sure the Ethernet cables themselves weren&apos;t the
          issue. They were brand new, but it was worth testing them on a
          known-good device. Moving forward, I wasn&apos;t exactly sure what to
          do -- but ChatGPT is great at getting the ideas rolling, even if it
          does hallucinate at times. With a "treat failures as lessons"
          attitude, I started bouncing between GPT-based suggestions, Googling
          documentation, and reading forum posts.
        </p>
        <p>
          Funnily enough, I had the names of the interfaces for each port mixed
          up at first. After some deductive reasoning, I realized that the one
          without an IP address was probably the LAN port on the NanoPi causing
          my connectivity issues. Manually setting it with `ip addr add` got me
          my first step towards <i>something</i>. Now I was able to ping from
          and to my VM server -- my first wins in this troubleshooting process!
        </p>
        <h3 className="text-3xl">Enabling Internet Access for My VM Server</h3>
        <p>
          Now I knew my VM server had connectivity to my LAN (Local Area
          Network), but it still didn&apos;t have access to the internet (WAN,
          or Wide Area Network). On the VM server, I used `ip route` to check,
          and I didn&apos;t see my NanoPi&apos;s LAN port IP address listed as a
          default gateway. Setting it manually with `ip route add default via .
          . .` did the trick—voila! My VM server now had internet access.
        </p>
        <p>
          Next, I needed to test if these configurations persisted after a
          reboot. Annnnnd. . . it didn&apos;t.
        </p>
        <h3 className="text-3xl">The Proxmox Virtual Bridge Solution</h3>
        <p>
          I quickly realized that I had to set all of this up through my virtual
          bridge interface within the VM server, not the physical Ethernet
          interface. This is because the VMs inside the server needed internet
          access too, and Proxmox uses the bridge as the primary network source.
          Speaking of which, I had to check if my VMs were now getting internet
          access.
        </p>
        <p>
          They weren&apos;t. But after turning on IP forwarding, editing
          iptables rules, and setting static IP addresses and gateways in my
          `/etc/network/interfaces` file on the VM, I finally solved the issue,
          and in a way that would persist after reboot. I&apos;ll have to repeat
          this setup on any particular VM I want to access the internet, but
          that&apos;s not a big deal -- I&apos;ve gained plenty of reps doing it
          now, and it's not like every single VM will need that anyway.
        </p>
        <h3 className="text-3xl">What I&apos;ve Gained & Final Thoughts</h3>
        <p>
          At the end of this project, I can confidently say I&apos;ve gained a
          lot and feel way more experienced. Written out, it all seems so
          simple, but in the moment, I was definitely scratching my head and
          feeling beat up at points. I wrote down every step I took and command
          I input, constantly having to manually "ctrl + z" when things didn't
          go as planned. Especially rough was when something worked, but when I
          went to duplicate it after reboot, something else broke. As mentioned,
          though, each failure was just a lesson, and I came out better for it.
        </p>
        <p>Now, I have:</p>
        <ul className="space-y-4">
          <li>- Network-level ad and tracker blocking with Pi-hole</li>
          <li>- Local recursive DNS resolution with Unbound</li>
          <li>- Functioning firewalls between my router, UFW, and iptables</li>
          <li>
            - An optimized tailnet, with a bonus of Mullvad VPN access, allowing
            me to securely enjoy all these perks from anywhere
          </li>
          <li>
            - A better understanding of the troubleshooting process, as well as
            added familiarty with the command line!
          </li>
        </ul>
        <p>This was a win on every layer.</p>
      </div>
    </>
  );
}
