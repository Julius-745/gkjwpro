import {
    Box,
    Image,
    Text,
    Stack
  } from '@chakra-ui/react'
  import React, {useState, useEffect} from 'react'
  import axios from 'axios';

  export const Content = () => {
    const[error, setError] = useState(null);
    const[warta, setWarta] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:1337/api/wartas?populate=*&sort[0]=createdAt%3Adesc&pagination[start]=0&pagination[limit]=1`)
            .then(res => setWarta(res.data))
            .catch(err => setError(err.message));
    } , []);
    
    if(error) {
        return <div>An error occured: {error.message}</div>
    }
    
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return(
        <Stack margin={20}>
            {warta.data?.map((warta) => {
            const date = (warta.attributes.createdAt)
            return(
                <Box key={warta.id} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                    <Image src={warta.attributes.Header.data.attributes.url}/>
                    <Image marginTop={10} src={warta.attributes.Contact.data.attributes.url}/>
                    <Text marginTop={5} fontSize={'xl'} fontWeight={'bold'}>{new Date(date).toLocaleDateString("id-ID", options)}</Text>
                    <Text marginTop={5} fontSize={'2xl'} fontWeight={'bold'}>{warta.attributes?.Title}</Text>
                    <Text marginTop={5} fontWeight={'bold'}>{warta.attributes?.SubTitle}</Text>
                    <Text fontSize={'lg'}>{warta.attributes?.Contents}</Text>
                    <Text marginTop={10} fontSize={'2xl'} fontWeight={'bold'}>{warta.attributes?.JudulPelayanan}</Text>
                    <Text marginTop={2} fontSize={'xl'} fontWeight={'bold'}>{warta.attributes?.TanggalPelayanan}</Text>
                    <Text fontWeight={'bold'}>{warta.attributes?.subJudulPelayanan}</Text>
                    <Image src={warta.attributes.TablePelayanan.data.attributes.url}/>
                    <Text marginTop={10} fontSize={'2xl'} fontWeight={'bold'}>{warta.attributes?.JudulPelayanan2}</Text>
                    <Text marginTop={2} fontSize={'xl'} fontWeight={'bold'}>{warta.attributes?.TanggalPelayanan2}</Text>
                    <Text fontWeight={'bold'}>{warta.attributes?.subJudulPelayanan2}</Text>
                    <Image src={warta.attributes.TablePelayanan2.data.attributes.url}/>
                    <Text marginTop={10} fontSize={'2xl'} fontWeight={'bold'}>{warta.attributes?.JudulBacaan}</Text>
                    <Image src={warta.attributes.TableBacaan.data.attributes.url}/>
                    <Text marginTop={10} fontSize={'2xl'} fontWeight={'bold'}>{warta.attributes?.JudulInformasi}</Text>
                    <Image src={warta.attributes.TableInformasi.data.attributes.url}/>
                    <Text marginTop={10} fontSize={'2xl'} fontWeight={'bold'}>Informasi Ibadah KRW</Text>
                    <Image src={warta.attributes.TableIbadahKRW.data.attributes.url}/>
                    <Text marginTop={10} fontSize={'2xl'} fontWeight={'bold'}>Jadwal Ibadah KRW Bulan ini</Text>
                    <Image src={warta.attributes.TableIbadahKRWBulanan.data.attributes.url}/>
                    <Text marginTop={10} fontSize={'2xl'} fontWeight={'bold'}>Warga Yang Berulang Tahun Bulan ini</Text>
                    <Image src={warta.attributes.TableUlangTahunMingguIni.data.attributes.url}/>
                    <Text fontSize={'lg'}>{warta.attributes?.Catatan}</Text>
                    <Text marginTop={10} fontSize={'2xl'} fontWeight={'bold'}>Informasi Kegiatan</Text>
                    <Image src={warta.attributes.TableInformasiKegiatan.data.attributes.url}/>
                    <Text marginTop={10} fontSize={'2xl'} fontWeight={'bold'}>Informasi Tambahan</Text>
                    <Text fontSize={'lg'}>{warta.attributes?.BeritaKelahiran}</Text>
                    <Text fontSize={'lg'}>{warta.attributes?.Pengumuman1}</Text>
                    <Text fontSize={'lg'}>{warta.attributes?.Pengumuman2}</Text>
                    <Text fontSize={'lg'}>{warta.attributes?.RembugWarga}</Text>
                    <Text marginTop={10} fontSize={'2xl'} fontWeight={'bold'}>Jadwal Rembug Warga</Text>
                    <Image src={warta.attributes.TableRembugWarga.data.attributes.url}/>
                    <Text fontSize={'lg'}>{warta.attributes?.ProgramKegiatanPembangunan}</Text>
                    <Text marginTop={10} fontSize={'2xl'} fontWeight={'bold'}>{warta.attributes?.TitlePengumumanTambahan}</Text>
                    <Text>{warta.attributes?.PengumumanTambahan}</Text>
                    <Text marginTop={10} fontSize={'2xl'} fontWeight={'bold'}>Doa Syafaat Dalam Minggu Ini</Text>
                    <Text fontSize={'lg'}>{warta.attributes?.DoaSyafaat}</Text>
                    <Image marginTop={10} src={warta.attributes.Penutup.data.attributes.url}/>
                    <Text fontSize={'lg'}>TETAP DISIPLIN DAN MEMATUHI PROTOKOL KESEHATAN DIMANAPUN ANDA BERADA. PHMJ, 31 JULI 2022</Text>
                </Box>
            )
            })}
        </Stack>
    )
  }