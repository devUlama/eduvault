const courseDetails = {
  "ITC 3304": [
    {
      lectureId: 1,
      lectureLink: "materials/php/lec1.pdf",
      lectureTitle: "Introduction to php",
    },
    {
      lectureId: 2,
      lectureLink: "materials/php/lec2.pdf",
      lectureTitle: "Control Structures",
    },
    {
      lectureId: 3,
      lectureLink: "materials/php/lec3.pdf",
      lectureTitle: "Function and Arrays",
    },
    {
      lectureId: 4,
      lectureLink: "materials/php/lec4.pdf",
      lectureTitle: "Handling HTML forms with PHP",
    },
    {
      lectureId: 5,
      lectureLink: "materials/php/lec5.pdf",
      lectureTitle: "PHP and MySQL",
    },
    {
      lectureId: 6,
      lectureLink: "materials/php/lec6.pdf",
      lectureTitle: "Clasess and Objects",
    },
    {
      lectureId: 7,
      lectureLink: "materials/php/lec7.pdf",
      lectureTitle: "File handling in PHP",
    },
    /* {
      lectureId: ,
      lectureLink: "materials/",
      lectureTitle: "",
    }, */
  ],

  "ITC 3303": [
    {
      lectureId: 1,
      lectureLink: "materials/dataCom/lec1.pdf",
      lectureTitle: "Review of Networking Concepts",
    },
    {
      lectureId: 2,
      lectureLink: "materials/dataCom/lec2.pdf",
      lectureTitle: "Internet History, Administration and Infrastructure",
    },
    {
      lectureId: 3,
      lectureLink: "materials/dataCom/lec3.pdf",
      lectureTitle: "Introduction to Network Models",
    },
    {
      lectureId: 4,
      lectureLink: "materials/dataCom/lec4.pdf",
      lectureTitle: "Internet Protocol Version 4 (IPv4)",
    },
    {
      lectureId: 5,
      lectureLink: "materials/dataCom/lec5.pdf",
      lectureTitle: "IP Addressing and Classful Addressing ",
    },
    {
      lectureId: 6,
      lectureLink: "materials/dataCom/lec6.pdf",
      lectureTitle: "Classless Addressing and Subnetting and Supernetting",
    },
    {
      lectureId: 7,
      lectureLink: "materials/dataCom/lec7.pdf",
      lectureTitle: "Delivery and Forwarding of IP Packets",
    },
    {
      lectureId: 8,
      lectureLink: "materials/dataCom/lec8.pdf",
      lectureTitle: "Unicast Routing Protocol",
    },
    {
      lectureId: 9,
      lectureLink: "materials/dataCom/lec9.pdf",
      lectureTitle: "User Datagram Protocol (UDP)",
    },
    {
      lectureId: 10,
      lectureLink: "materials/dataCom/lec10.pdf",
      lectureTitle: "Transmission Control Protocol (TCP)",
    },
    {
      lectureId: 11,
      lectureLink: "materials/dataCom/lec11.pdf",
      lectureTitle: "Dynamic Host Configuration Protocol (DHCP)",
    },
    {
      lectureId: 12,
      lectureLink: "materials/dataCom/lec12.pdf",
      lectureTitle: "Domain Name System (DNS)",
    },
    {
      lectureId: 13,
      lectureLink: "materials/dataCom/lec13.pdf",
      lectureTitle: "File Transfer Protocols (FTP, TFTP)",
    },
    {
      lectureId: 14,
      lectureLink: "materials/dataCom/lec14.pdf",
      lectureTitle: "World Wide Web and HTTP",
    },
    {
      lectureId: 15,
      lectureLink: "materials/dataCom/lec15.pdf",
      lectureTitle: "Remote Login Protocol (TELNET, SSH)",
    },
  ],
};

export function course() {
  let courseId = localStorage.getItem("courseCode");
  let lectures = courseDetails[courseId];
  return lectures;
}
