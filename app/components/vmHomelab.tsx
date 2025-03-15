export default function VMHomelab() {
  return (
    <>
      <h2 className="text-3xl text-center underline lg:text-left lg:ms-20 pt-5 font-bold pb-10">
        Setting Up My Homelab: A Virtual Machine Server
      </h2>
      <div className="px-4 sm:max-w-screen-sm lg:max-w-screen-md mx-auto space-y-10 text-2xl pb-5">
        <p className="text-center underline text-xl pb-5 visible sm:hidden">
          for best viewing, access on desktop or tablet!
        </p>
        <img
          src="/homelabAssets/desktop_internals.jpg"
          className="rounded-2xl mx-auto"
          width={400}
        />
        <p>
          My most recent project has been a ridiculous amount of fun: setting up
          a bare-metal VM homelab! Before diving into the details, let's quickly
          define some key terms.
        </p>
        <h3 className="text-3xl underline">
          What Are Virtual Machines and Bare-Metal Hypervisors?
        </h3>
        <p>
          A <b>virtual machine (VM)</b> is a virtualized computer that runs
          within physical hardware. It uses a pre-defined amount of the host's
          resources without taking them all up. For example, on my MacBook Pro,
          I can set up a Windows VM and use it as if it were its own computer on
          my local network. The VM operates independently of the host operating
          system (macOS in this case), existing as an isolated environment
          (known as the guest OS).
        </p>
        <p>
          To run VMs, you need software called a hypervisor, which manages VMs
          and their configurations. It lets you allocate resources, create or
          delete entire VMs, and save snapshots of their states. There are two
          types of hypervisors:
        </p>
        <ol>
          <li>
            1. <b className="underline">Type 2 Hypervisor</b>: Runs on top of a
            host operating system. For example, software like VirtualBox or
            VMware Workstation allow you to set up VMs through a user-friendly
            interface.
          </li>
          <li>
            2.{" "}
            <b className="underline">
              Type 1 Hypervisor (Bare-Metal Hypervisor)
            </b>
            : Runs directly on hardware, bypassing the need for a host OS. This
            provides better performance and more control over the system but
            requires more technical knowledge to set up.
          </li>
        </ol>
        <p>
          While Type 2 hypervisors are accessible and user-friendly, Type 1
          hypervisors excel in resource efficiency and configurability, making
          them ideal for homelab projects like mine.
        </p>
        <h3 className="text-3xl underline">Why Set Up a VM Homelab?</h3>
        <p>Virtual machines offer numerous benefits:</p>
        <ul>
          <li>
            - <b>Maximized hardware usage</b>: One physical machine can host
            multiple VMs.
          </li>
          <li>
            - <b>Cost efficiency</b>: Easier to spin up new VMs than buy
            additional hardware.
          </li>
          <li>
            - <b>Safe experimentation</b>: Snapshots make it easy to revert to a
            stable state after mistakes.
          </li>
        </ul>
        <p>For my use case, I needed a VM homelab that could:</p>
        <ol>
          <li>- Scale with growing demands for RAM and storage.</li>
          <li>
            - Be accessed remotely, supporting a flexible, "digital nomad"
            lifestyle.
          </li>
        </ol>
        <p>
          I&apos;m using this homelab to set up learning environments and assess
          bug bounty targets—tasks that exceed the hardware limitations of my
          MacBook—while also gaining hands-on experience with novel computer
          hardware.
        </p>
        <h3 className="text-3xl underline">My Homelab Setup</h3>
        <img
          src="/homelabAssets/pi_internals.jpg"
          className="rounded-2xl mx-auto"
          width={400}
        />
        <p>Here's the basic design of my homelab:</p>
        <ul>
          <li>
            - <b className="underline">Lenovo ThinkCentre M900 SFF</b>: The VM
            server.
          </li>
          <li>
            - <b className="underline">Proxmox</b>: A bare-metal hypervisor
            running on the M900.
          </li>
          <li>
            - <b className="underline">Raspberry Pi Zero 2 W</b>: Enables remote
            power control of the M900 by existing as a "remote".
          </li>
          <li>
            - <b className="underline">MacBook Pro</b>: My primary device for
            accessing the lab.
          </li>
          <li>
            - <b className="underline">Tailscale</b>: A mesh VPN service for
            secure remote access to the lab.
          </li>
        </ul>
        <h3 className="text-3xl underline">Choosing the Components</h3>
        <h4 className="underline">The Lenovo ThinkCentre M900</h4>
        <p>
          I found a refurbished Lenovo M900 Small Form Factor (SFF), which was
          great because it offered excellent value and upgradeability. Out of
          the box, it came with 16GB of memory and 256GB of storage, doubling my
          MacBook&apos;s specs in both categories. Plus, it supports upwards of
          64GB of memory and several terabytes of storage. If I ever want to
          dedicate a VM to gaming, I can install a GPU as well. Lenovo&apos;s
          reputation for reliability made this a clear choice.
        </p>
        <h4 className="underline">Proxmox Hypervisor</h4>
        <p>
          Deciding on a bare-metal hypervisor came down to two contenders:
          Proxmox and VMware ESXi. Recent changes to VMware&apos;s free
          tier—including a 60-day trial limitation—made Proxmox the more
          attractive choice. Proxmox is free, open-source, and has an active
          community, making it an excellent tool for my purposes.
        </p>
        <h4 className="underline">Remote Power Control with Raspberry Pi</h4>
        <p>
          One challenge was finding a way to remotely power the server on and
          off. Leaving it running 24/7 would waste energy and increase costs.
          Research led me to use a much smaller Raspberry Pi to send a
          "Wake-On-LAN" (WoL) packet to the server, allowing me to turn it on
          remotely. The Pi&apos;s low power consumption makes it ideal for this
          purpose.
        </p>
        <h4 className="underline">Remote Access with Tailscale</h4>
        <p>
          Proxmox&apos;s web-based interface is accessible through a private IP
          address, which is not exposed to the internet, for security reasons.
          To access the lab remotely, I needed to create a secure connection to
          my local network. Tailscale, a peer-to-peer VPN solution, solved this
          problem. By setting up Tailscale on all my devices, I can securely
          access my homelab from anywhere as if I were on my home network.
        </p>
        <h3 className="text-3xl underline">Workflow</h3>
        <img src="/homelabAssets/diagram_drawing.png" className="rounded-2xl" />
        <p>With everything configured, my workflow looks like this:</p>
        <ol>
          <li>- Open Tailscale on my MacBook to connect to my virtual LAN.</li>
          <li>- SSH into the Raspberry Pi to send a WoL packet to the M900.</li>
          <li>
            - Access the now online Proxmox web UI to manage or use my VMs.
          </li>
        </ol>
        <p>
          This setup allows me to harness the power of a desktop&apos;s
          resources while maintaining the portability of my laptop. Whether
          I&apos;m learning, experimenting, or working, I&apos;ve built a system
          that supports my needs wherever I go.
        </p>
        <h3 className="text-3xl underline">TL;DR</h3>
        <img
          src="/homelabAssets/pi_and_desktop.jpg"
          className="rounded-2xl mx-auto"
          width={400}
        />
        <p>
          To overcome the hardware limitations of my MacBook, I set up a
          refurbished Lenovo M900 desktop with Proxmox to run VMs. I added a
          Raspberry Pi for remote power control and Tailscale, a mesh VPN, for
          secure remote access. This homelab lets me work flexibly, and in the
          process, gain valuable hands-on IT experience.
        </p>
      </div>
    </>
  );
}
