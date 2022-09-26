import {
    Box,
    Image,
    Text,
    Flex
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
        <Flex margin={20} flexDirection={'column'}>
            {warta.data?.map((warta) => {
            const date = (warta.attributes.createdAt)
            return(
                <Box key={warta.id}>
                    <Image src={warta.attributes.Header.data.attributes.url}/>
                    <Image src={warta.attributes.Contact.data.attributes.url}/>
                    <Text fontSize={'xl'}>{new Date(date).toLocaleDateString("id-ID", options)}</Text>
                    <Text>{warta.attributes?.SubTitle}</Text>
                    <Text>{warta.attributes?.Contents}</Text>
                    <Text>{warta.attributes?.JudulPelayanan}</Text>
                    <Text>{warta.attributes?.TanggalPelayanan}</Text>
                    <Text>{warta.attributes?.subJudulPelayanan}</Text>
                    <Image src={warta.attributes.TablePelayanan.data.attributes.url}/>
                    <Text>{warta.attributes?.JudulPelayanan2}</Text>
                    <Text>{warta.attributes?.TanggalPelayanan2}</Text>
                    <Text>{warta.attributes?.subJudulPelayanan2}</Text>
                    <Image src={warta.attributes.TablePelayanan2.data.attributes.url}/>
                    <Text>{warta.attributes?.JudulBacaan}</Text>
                    <Image src={warta.attributes.TableBacaan.data.attributes.url}/>
                    <Text>{warta.attributes?.JudulInformasi}</Text>
                    <Image src={warta.attributes.TableInformasi.data.attributes.url}/>
                    <Text>Informasi Ibadah KRW</Text>
                    <Image src={warta.attributes.TableIbadahKRW.data.attributes.url}/>
                    <Text>Jadwal Ibadah KRW Bulan ini</Text>
                    <Image src={warta.attributes.TableIbadahKRWBulanan.data.attributes.url}/>
                    <Text>Warga Yang Berulang Tahun Bulan ini</Text>
                    <Image src={warta.attributes.TableUlangTahunMingguIni.data.attributes.url}/>
                    <Text>{warta.attributes?.Catatan}</Text>
                    <Text>Informasi Kegiatan</Text>
                    <Image src={warta.attributes.TableInformasiKegiatan.data.attributes.url}/>
                    <Text>Informasi Tambahan</Text>
                    <Text>{warta.attributes?.BeritaKelahiran}</Text>
                    <Text>{warta.attributes?.Catatan}</Text>
                    <Text>{warta.attributes?.Pengumuman1}</Text>
                    <Text>{warta.attributes?.Pengumuman2}</Text>
                    <Text>{warta.attributes?.RembugWarga}</Text>
                    <Text>Jadwal Rembug Warga</Text>
                    <Image src={warta.attributes.TableRembugWarga.data.attributes.url}/>
                    <Text>{warta.attributes?.ProgramKegiatanPembangunan}</Text>
                    <Text>{warta.attributes?.TitlePengumumanTambahan}</Text>
                    <Text>{warta.attributes?.PengumumanTambahan}</Text>
                    <Text>Doa Syafaat Dalam Minggu Ini</Text>
                    <Text>{warta.attributes?.DoaSyafaat}</Text>
                    <Image src={warta.attributes.Penutup.data.attributes.url}/>
                    <Text>TETAP DISIPLIN DAN MEMATUHI PROTOKOL KESEHATAN DIMANAPUN ANDA BERADA. PHMJ, 31 JULI 2022</Text>
                </Box>
            )
            })}
        </Flex>
    )
  }