import { FC } from 'react';
import PricingComponent from '@/components/PricingComponent';
import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/sections/Footer';
import LancezVous from '@/components/sections/LancezVous';
interface pageProps {}

const packs: Package[] = [
  {
    id: 7,
    name: 'Standard',
    type: 'Standard',
    description: 'This is a sample package description.',
    price: 235,
    packageStripeId: 'eee',
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
    packageStripeId: 'eee',

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
    <div className='min-h-sceen flex w-full flex-col items-center justify-center gap-32 bg-white'>
      <section className='flex max-w-[1296px]  flex-col gap-12'>
        <div className='mt-10 inline-flex  max-w-[1296px]  flex-col'>
          <div className='flex  flex-col items-center justify-start gap-[30px] self-stretch'>
            <div className='flex  flex-col items-start justify-start self-stretch'>
              <div className='flex  flex-col items-center justify-start self-stretch pl-[100px] pr-[97px]'>
                <div className="font-['IBM Plex Sans'] text-center text-7xl font-medium leading-[70px] text-stone-900">
                  Tarifs
                </div>
              </div>
            </div>
            <div className='flex flex-col items-start justify-start self-stretch'>
              <div className='flex  flex-col items-center justify-start self-stretch pl-[1.10px] pr-[0.90px]'>
                <div className="font-['IBM Plex Sans'] text-center text-lg font-normal leading-7 text-neutral-700">
                  We consider all the drivers of change gives you the an blocks
                  & components you{' '}
                </div>
                <div className="font-['IBM Plex Sans'] text-center text-lg font-normal leading-7 text-neutral-700">
                  need to change to create a truly professional website - so you
                  can save time and <br />
                  stay focused to it.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap justify-center gap-4 lg:justify-start'>
          {packs.map((pack: Package) => (
            <PricingComponent
              key={pack.id}
              {...pack}
            />
          ))}
        </div>
      </section>
      <section className='flex w-full max-w-6xl flex-col gap-12'>
        <div className='mt-10 inline-flex  max-w-[1296px]  flex-col'>
          <div className='flex  flex-col items-center justify-start gap-[30px] self-stretch'>
            <div className='flex  flex-col items-start justify-start self-stretch'>
              <div className='flex  flex-col items-center justify-start self-stretch pl-[100px] pr-[97px]'>
                <div className="font-['IBM Plex Sans'] text-center text-5xl font-medium leading-[70px] text-stone-900">
                  Comparez les pack
                </div>
              </div>
            </div>
            <div className='flex flex-col items-start justify-start self-stretch'>
              <div className='flex  flex-col items-center justify-start self-stretch pl-[1.10px] pr-[0.90px]'>
                <div className=" font-['IBM Plex Sans'] max-w-xl text-center text-lg font-normal leading-7 text-neutral-700">
                  Clarity gives you the blocks & components you need to create a
                  truly professional website, landing page for your SaaS.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow className='grid w-full grid-cols-12'>
              <TableHead className='col-span-5'></TableHead>
              <TableHead className='col-span-2 h-fit'>
                <div className='inline-flex h-16 w-[215.20px] flex-col items-center justify-start gap-2.5'>
                  <div className='flex h-6 flex-col items-start justify-start self-stretch'>
                    <div className='flex h-6 flex-col items-start justify-start self-stretch pr-[162.20px]'>
                      <div className="font-['IBM Plex Sans'] text-base font-semibold leading-normal text-zinc-500">
                        Standard
                      </div>
                    </div>
                  </div>
                  <div className='flex h-[30px] flex-col items-start justify-start self-stretch'>
                    <div className='flex h-[30px] flex-col items-start justify-start self-stretch pr-[141.20px]'>
                      <div className="font-['IBM Plex Sans'] text-xl font-semibold leading-[30px] text-stone-900">
                        $99
                      </div>
                    </div>
                  </div>
                </div>
              </TableHead>
              <TableHead className='col-span-2'>
                <div className=' inline-flex h-16 flex-col items-center justify-start gap-2.5'>
                  <div className='flex h-6 flex-col items-start justify-start self-stretch'>
                    <div className='flex h-6  flex-col items-start justify-start self-stretch'>
                      <div className="font-['IBM Plex Sans'] text-base font-semibold leading-normal text-zinc-500">
                        Express 24h
                      </div>
                    </div>
                  </div>
                  <div className='flex h-[30px] flex-col items-start justify-start self-stretch'>
                    <div className='flex h-[30px] flex-col items-start justify-start self-stretch pr-[141.20px]'>
                      <div className="font-['IBM Plex Sans'] text-xl font-semibold leading-[30px] text-stone-900">
                        $199
                      </div>
                    </div>
                  </div>
                </div>
              </TableHead>
              <TableHead className='col-span-2 h-fit'>
                <div className='  inline-flex flex-col items-center justify-start gap-2.5'>
                  <div className='flex  flex-col items-start justify-start self-stretch'>
                    <div className='flex  flex-col items-start justify-start self-stretch'>
                      <div className="font-['IBM Plex Sans'] w-max text-base font-semibold leading-normal text-zinc-500">
                        Express + Expert-comptable
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-start justify-start self-stretch'>
                    <div className='flex  flex-col items-start justify-start self-stretch pr-[141.20px]'>
                      <div className="font-['IBM Plex Sans'] text-xl font-semibold leading-[30px] text-stone-900">
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
                className='grid w-full grid-cols-12'
              >
                <TableCell className='col-span-5'>{invoice.service}</TableCell>
                <TableCell className='col-span-2'>
                  <Image
                    src={invoice.valid ? '/valid.svg' : '/notValid.svg'}
                    alt=''
                    width={20}
                    height={20}
                  ></Image>
                </TableCell>
                <TableCell className='col-span-2'>
                  <Image
                    src={invoice.valid ? '/valid.svg' : '/notValid.svg'}
                    alt=''
                    width={20}
                    height={20}
                  ></Image>
                </TableCell>
                <TableCell className='col-span-2'>
                  <Image
                    src={invoice.valid ? '/valid.svg' : '/notValid.svg'}
                    alt=''
                    width={20}
                    height={20}
                  ></Image>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      <section className='flex w-full max-w-6xl flex-col gap-12'>
        <div className='mt-10 inline-flex  max-w-[1296px]  flex-col'>
          <div className='flex  flex-col items-center justify-start gap-[30px] self-stretch'>
            <div className='flex  flex-col items-start justify-start self-stretch'>
              <div className='flex  flex-col items-center justify-start self-stretch pl-[100px] pr-[97px]'>
                <div className='text-center font-ibmPlexSans text-5xl font-medium leading-[70px] text-stone-900'>
                  Nos Services
                </div>
              </div>
            </div>
            <div className='flex flex-col items-start justify-start self-stretch'>
              <div className='flex  flex-col items-center justify-start self-stretch pl-[1.10px] pr-[0.90px]'>
                <div className=" font-['IBM Plex Sans'] max-w-xl text-center text-lg font-normal leading-7 text-neutral-700">
                  Clarity gives you the blocks & components you need to create a
                  truly professional website, landing page for your SaaS.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow className='grid w-full grid-cols-12'>
              <TableHead className='col-span-6'></TableHead>
              <TableHead className='col-span-3 h-fit'>
                <div className="font-['IBM Plex Sans'] text-base font-semibold leading-normal text-zinc-500">
                  Prix
                </div>
              </TableHead>
              <TableHead className='col-span-3'>
                <div className="font-['IBM Plex Sans'] text-base font-semibold leading-normal text-zinc-500">
                  Frais
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className='grid w-full grid-cols-12'>
              <TableCell className='col-span-6'>
                <div className='font-ibmPlexSans text-base font-semibold leading-normal text-zinc-500'>
                  **Création d’entreprise**{' '}
                </div>
              </TableCell>
            </TableRow>
            {servicesCost.creation.map((invoice) => (
              <TableRow
                key={invoice.service}
                className='grid w-full grid-cols-12'
              >
                <TableCell className='col-span-6'>{invoice.service}</TableCell>
                <TableCell className='col-span-3'>{invoice.price}</TableCell>
                <TableCell className='col-span-3'>{invoice.frais}</TableCell>
              </TableRow>
            ))}
            <TableRow className='grid w-full grid-cols-12'>
              <TableCell className='col-span-6'>
                <div className='font-ibmPlexSans text-base font-semibold leading-normal text-zinc-500'>
                  **Modification de statuts**{' '}
                </div>
              </TableCell>
            </TableRow>
            {servicesCost.modification.map((invoice) => (
              <TableRow
                key={invoice.service}
                className='grid w-full grid-cols-12'
              >
                <TableCell className='col-span-6'>{invoice.service}</TableCell>
                <TableCell className='col-span-3'>{invoice.price}</TableCell>
                <TableCell className='col-span-3'>{invoice.frais}</TableCell>
              </TableRow>
            ))}
            <TableRow className='grid w-full grid-cols-12'>
              <TableCell className='col-span-6'>
                <div className='font-ibmPlexSans text-base font-semibold leading-normal text-zinc-500'>
                  **Dissolution-liquidation**
                </div>
              </TableCell>
            </TableRow>
            {servicesCost.dissolution.map((invoice) => (
              <TableRow
                key={invoice.service}
                className='grid w-full grid-cols-12'
              >
                <TableCell className='col-span-6'>{invoice.service}</TableCell>
                <TableCell className='col-span-3'>{invoice.price}</TableCell>
                <TableCell className='col-span-3'>{invoice.frais}</TableCell>
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
