import { FC } from 'react';
import PricingComponent from '@/components/PricingComponent';
import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/sections/Footer';
import LancezVous from '@/components/LancezVous';
interface pageProps {}

const packs: Package[] = [
  {
    id: 7,
    name: 'Standard',
    type: 'Standard',
    description: 'This is a sample package description.',
    price: 235,
    elements: [
      {
        text: 'Element 1',
      },
      {
        text: 'Element 2',
      },
    ],
    extra: [
      {
        text: 'Extra 1',
      },
      {
        text: 'Extra 2',
      },
    ],
    packageDetails: [
      {
        text: 'Detail 1',
        detail: 'Detail 1 Description',
      },
      {
        text: 'Detail 2',
        detail: 'Detail 2 Description',
      },
    ],
    administrativeFees: {
      perks: [
        {
          text: 'Perk 1',
          detail: 'Perk 1 Description',
        },
        {
          text: 'Perk 2',
          detail: 'Perk 2 Description',
        },
      ],
      price: 29.99,
      description: 'Administrative Fee Description',
      isObligatory: true,
    },
  },
  {
    id: 8,
    name: 'Express',
    type: 'Express',
    description: 'This is a sample package description.',
    price: 535,
    elements: [
      {
        text: 'Element 1',
      },
      {
        text: 'Element 2',
      },
    ],
    extra: [
      {
        text: 'Extra 1',
      },
      {
        text: 'Extra 2',
      },
    ],
    packageDetails: [
      {
        text: 'Detail 1',
        detail: 'Detail 1 Description',
      },
      {
        text: 'Detail 2',
        detail: 'Detail 2 Description',
      },
    ],
    administrativeFees: {
      perks: [
        {
          text: 'Perk 1',
          detail: 'Perk 1 Description',
        },
        {
          text: 'Perk 2',
          detail: 'Perk 2 Description',
        },
      ],
      price: 29.99,
      description: 'Administrative Fee Description',
      isObligatory: true,
    },
  },
];

const servicesCost = {
  creation: [
    {
      id: 1,
      service: 'Création de SAS',
      price: 'À partir de 69€',
      frais: '+ frais administratifs',
    },
    {
      id: 2,
      service: 'Création de SASU',
      price: 'À partir de 69€',
      frais: '+ frais administratifs',
    },
    {
      id: 3,
      service: 'Création de SARL',
      price: 'À partir de 69€',
      frais: '+ frais administratifs',
    },
    {
      id: 4,
      service: 'Création de EURL',
      price: 'À partir de 69€',
      frais: '+ frais administratifs',
    },
    {
      id: 5,
      service: 'Création de SCI',
      price: 'À partir de 69€',
      frais: '+ frais administratifs',
    },
    {
      id: 6,
      service: 'Création de Société Civile',
      price: 'À partir de 69€',
      frais: '+ frais administratifs',
    },
    {
      id: 7,
      service: 'Création d’Auto-Entreprise',
      price: 'À partir de 59€',
      frais: 'sans frais administratifs',
    },
    {
      id: 8,
      service: 'Création d’EI',
      price: 'À partir de 59€',
      frais: 'sans frais administratifs',
    },
    {
      id: 9,
      service: 'Création d’Association',
      price: 'À partir de 79€',
      frais: 'sans frais administratifs',
    },
    {
      id: 10,
      service: 'Création de SELAS',
      price: 'À partir de 69€',
      frais: '+ frais administratifs',
    },
    {
      id: 11,
      service: 'Création de SELARL',
      price: 'À partir de 69€',
      frais: '+ frais administratifs',
    },
  ],
  modification: [
    {
      id: 12,
      service: 'Changement de siège social',
      price: 'À partir de 149€',
      frais: '+ frais administratifs',
    },
    {
      id: 13,
      service: 'Changement de dirigeant',
      price: 'À partir de 149€',
      frais: '+ frais administratifs',
    },
    {
      id: 14,
      service: 'Changement d’objet social',
      price: 'À partir de 149€',
      frais: '+ frais administratifs',
    },
    {
      id: 15,
      service: 'Changement de dénomination',
      price: 'À partir de 149€',
      frais: '+ frais administratifs',
    },
    {
      id: 16,
      service: 'Changement de situation du dirigeant',
      price: 'À partir de 149€',
      frais: '+ frais administratifs',
    },
    {
      id: 17,
      service: 'Déclaration du registre des bénéficiaires effectifs (RBE)',
      price: 'À partir de 100€',
      frais: '+ frais administratifs',
    },
    {
      id: 18,
      service: 'Modification d’association',
      price: 'À partir de 69€',
      frais: 'sans frais administratifs',
    },
    {
      id: 19,
      service: 'Modification d’Auto-Entreprise',
      price: 'À partir de 69€',
      frais: 'sans frais administratifs',
    },
  ],
  dissolution: [
    {
      id: 20,
      service: 'Dissolution de SAS-SASU',
      price: 'À partir de 149€',
      frais: '+ frais administratifs',
    },
    {
      id: 21,
      service: 'Dissolution de SARL-EURL',
      price: 'À partir de 149€',
      frais: '+ frais administratifs',
    },
    {
      id: 22,
      service: 'Dissolution de SCI',
      price: 'À partir de 149€',
      frais: '+ frais administratifs',
    },
    {
      id: 23,
      service: 'Radiation d’auto-entreprise',
      price: 'À partir de 59€',
      frais: 'sans frais administratifs',
    },
  ],
};

const services = [
  { id: 1, valid: true, service: 'Les statuts de votre société' },
  {
    id: 2,
    valid: true,
    service: "Vérification de votre dossier d'immatriculation",
  },
  { id: 3, valid: true, service: "Publication de l'annonce légale" },
  { id: 4, valid: true, service: 'Immatriculation de votre société au greffe' },
  { id: 5, valid: true, service: 'Garantie anti-rejet du greffe' },
  { id: 6, valid: true, service: 'Traitement express 24h' },
  {
    id: 7,
    valid: true,
    service: 'Assistance juriste illimitée (téléphone, mail, tchat)',
  },
  { id: 8, valid: false, service: 'Expert comptable' },
  {
    id: 9,
    valid: false,
    service:
      'Rendez-vous comptable pour choisir la forme juridique optimale et les options fiscales les plus avantageuses',
  },
  {
    id: 10,
    valid: false,
    service:
      'Conformité Annuelle avec déclarations de TVA, bilan, liasse fiscale réalisés par votre comptable',
  },
  {
    id: 11,
    valid: false,
    service:
      'Logiciel comptable simple et intuitif pour vous faire gagner du temps',
  },
  {
    id: 12,
    valid: false,
    service:
      'Votre comptable réactif et accessible par tchat, téléphone, visio et email',
  },
];

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];
const page: FC<pageProps> = () => {
  return (
    <div className="min-h-sceen flex flex-col justify-center gap-32 items-center bg-white">
      <section className="flex max-w-[1296px]  flex-col gap-12">
        <div className="max-w-[1296px] mt-10  flex-col  inline-flex">
          <div className="self-stretch  flex-col justify-start items-center gap-[30px] flex">
            <div className="self-stretch  flex-col justify-start items-start flex">
              <div className="self-stretch  pl-[100px] pr-[97px] flex-col justify-start items-center flex">
                <div className="text-center text-stone-900 text-7xl font-medium font-['IBM Plex Sans'] leading-[70px]">
                  Tarifs
                </div>
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start flex">
              <div className="self-stretch  pl-[1.10px] pr-[0.90px] flex-col justify-start items-center flex">
                <div className="text-center text-neutral-700 text-lg font-normal font-['IBM Plex Sans'] leading-7">
                  We consider all the drivers of change gives you the an blocks
                  & components you{' '}
                </div>
                <div className="text-center text-neutral-700 text-lg font-normal font-['IBM Plex Sans'] leading-7">
                  need to change to create a truly professional website - so you
                  can save time and <br />
                  stay focused to it.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
          {packs.map((pack: Package) => (
            <PricingComponent
              key={pack.id}
              {...pack}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col max-w-6xl w-full gap-12">
        <div className="max-w-[1296px] mt-10  flex-col  inline-flex">
          <div className="self-stretch  flex-col justify-start items-center gap-[30px] flex">
            <div className="self-stretch  flex-col justify-start items-start flex">
              <div className="self-stretch  pl-[100px] pr-[97px] flex-col justify-start items-center flex">
                <div className="text-center text-stone-900 text-5xl font-medium font-['IBM Plex Sans'] leading-[70px]">
                  Comparez les pack
                </div>
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start flex">
              <div className="self-stretch  pl-[1.10px] pr-[0.90px] flex-col justify-start items-center flex">
                <div className=" max-w-xl text-center text-neutral-700 text-lg font-normal font-['IBM Plex Sans'] leading-7">
                  Clarity gives you the blocks & components you need to create a
                  truly professional website, landing page for your SaaS.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="w-full grid grid-cols-12">
              <TableHead className="col-span-5"></TableHead>
              <TableHead className="col-span-2 h-fit">
                <div className="w-[215.20px] h-16 flex-col justify-start items-center gap-2.5 inline-flex">
                  <div className="self-stretch h-6 flex-col justify-start items-start flex">
                    <div className="self-stretch h-6 pr-[162.20px] flex-col justify-start items-start flex">
                      <div className="text-zinc-500 text-base font-semibold font-['IBM Plex Sans'] leading-normal">
                        Standard
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[30px] flex-col justify-start items-start flex">
                    <div className="self-stretch h-[30px] pr-[141.20px] flex-col justify-start items-start flex">
                      <div className="text-stone-900 text-xl font-semibold font-['IBM Plex Sans'] leading-[30px]">
                        $99
                      </div>
                    </div>
                  </div>
                </div>
              </TableHead>
              <TableHead className="col-span-2">
                <div className=" h-16 flex-col justify-start items-center gap-2.5 inline-flex">
                  <div className="self-stretch h-6 flex-col justify-start items-start flex">
                    <div className="self-stretch h-6  flex-col justify-start items-start flex">
                      <div className="text-zinc-500 text-base font-semibold font-['IBM Plex Sans'] leading-normal">
                        Express 24h
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[30px] flex-col justify-start items-start flex">
                    <div className="self-stretch h-[30px] pr-[141.20px] flex-col justify-start items-start flex">
                      <div className="text-stone-900 text-xl font-semibold font-['IBM Plex Sans'] leading-[30px]">
                        $199
                      </div>
                    </div>
                  </div>
                </div>
              </TableHead>
              <TableHead className="col-span-2 h-fit">
                <div className="  flex-col justify-start items-center gap-2.5 inline-flex">
                  <div className="self-stretch  flex-col justify-start items-start flex">
                    <div className="self-stretch  flex-col justify-start items-start flex">
                      <div className="text-zinc-500 w-max text-base font-semibold font-['IBM Plex Sans'] leading-normal">
                        Express + Expert-comptable
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-col justify-start items-start flex">
                    <div className="self-stretch  pr-[141.20px] flex-col justify-start items-start flex">
                      <div className="text-stone-900 text-xl font-semibold font-['IBM Plex Sans'] leading-[30px]">
                        $99
                      </div>
                    </div>
                  </div>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((invoice) => (
              <TableRow
                key={invoice.service}
                className="w-full grid grid-cols-12"
              >
                <TableCell className="col-span-5">{invoice.service}</TableCell>
                <TableCell className="col-span-2">
                  <Image
                    src={invoice.valid ? '/valid.svg' : '/notValid.svg'}
                    alt=""
                    width={20}
                    height={20}
                  ></Image>
                </TableCell>
                <TableCell className="col-span-2">
                  <Image
                    src={invoice.valid ? '/valid.svg' : '/notValid.svg'}
                    alt=""
                    width={20}
                    height={20}
                  ></Image>
                </TableCell>
                <TableCell className="col-span-2">
                  <Image
                    src={invoice.valid ? '/valid.svg' : '/notValid.svg'}
                    alt=""
                    width={20}
                    height={20}
                  ></Image>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      <section className="flex flex-col max-w-6xl w-full gap-12">
        <div className="max-w-[1296px] mt-10  flex-col  inline-flex">
          <div className="self-stretch  flex-col justify-start items-center gap-[30px] flex">
            <div className="self-stretch  flex-col justify-start items-start flex">
              <div className="self-stretch  pl-[100px] pr-[97px] flex-col justify-start items-center flex">
                <div className="text-center text-stone-900 text-5xl font-medium font-ibmPlexSans leading-[70px]">
                  Nos Services
                </div>
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start flex">
              <div className="self-stretch  pl-[1.10px] pr-[0.90px] flex-col justify-start items-center flex">
                <div className=" max-w-xl text-center text-neutral-700 text-lg font-normal font-['IBM Plex Sans'] leading-7">
                  Clarity gives you the blocks & components you need to create a
                  truly professional website, landing page for your SaaS.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="w-full grid grid-cols-12">
              <TableHead className="col-span-6"></TableHead>
              <TableHead className="col-span-3 h-fit">
                <div className="text-zinc-500 text-base font-semibold font-['IBM Plex Sans'] leading-normal">
                  Prix
                </div>
              </TableHead>
              <TableHead className="col-span-3">
                <div className="text-zinc-500 text-base font-semibold font-['IBM Plex Sans'] leading-normal">
                  Frais
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="w-full grid grid-cols-12">
              <TableCell className="col-span-6">
                <div className="text-zinc-500 text-base font-semibold font-ibmPlexSans leading-normal">
                  **Création d’entreprise**{' '}
                </div>
              </TableCell>
            </TableRow>
            {servicesCost.creation.map((invoice) => (
              <TableRow
                key={invoice.service}
                className="w-full grid grid-cols-12"
              >
                <TableCell className="col-span-6">{invoice.service}</TableCell>
                <TableCell className="col-span-3">{invoice.price}</TableCell>
                <TableCell className="col-span-3">{invoice.frais}</TableCell>
              </TableRow>
            ))}
            <TableRow className="w-full grid grid-cols-12">
              <TableCell className="col-span-6">
                <div className="text-zinc-500 text-base font-semibold font-ibmPlexSans leading-normal">
                  **Modification de statuts**{' '}
                </div>
              </TableCell>
            </TableRow>
            {servicesCost.modification.map((invoice) => (
              <TableRow
                key={invoice.service}
                className="w-full grid grid-cols-12"
              >
                <TableCell className="col-span-6">{invoice.service}</TableCell>
                <TableCell className="col-span-3">{invoice.price}</TableCell>
                <TableCell className="col-span-3">{invoice.frais}</TableCell>
              </TableRow>
            ))}
            <TableRow className="w-full grid grid-cols-12">
              <TableCell className="col-span-6">
                <div className="text-zinc-500 text-base font-semibold font-ibmPlexSans leading-normal">
                  **Dissolution-liquidation**
                </div>
              </TableCell>
            </TableRow>
            {servicesCost.dissolution.map((invoice) => (
              <TableRow
                key={invoice.service}
                className="w-full grid grid-cols-12"
              >
                <TableCell className="col-span-6">{invoice.service}</TableCell>
                <TableCell className="col-span-3">{invoice.price}</TableCell>
                <TableCell className="col-span-3">{invoice.frais}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      <Faq />
      <LancezVous />
      <Footer />
    </div>
  );
};

export default page;
