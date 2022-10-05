import {
    Box,
    Image,
    Text,
    Flex,
    useDimensions,
} from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown';
import React, {useState, useEffect} from 'react'
import axios from 'axios';

  export const Content = () => {
    const[error, setError] = useState(null);
    const[warta, setWarta] = useState([]);

    const styles = {
        image: {
            width: '100%',
            height: '100%',
        },
        judul: {
            fontWeight: 'bold',
            fontSize: '25px',
            marginTop: 5,
        },
        subjudul: {
            marginTop: 5,
            fontSize: '20px',
        },
        content: {
            marginTop: 2,
            fontSize: '15px'
        }
    }

    useEffect(() => {
        axios
            .get(`https://gkjwprob.domcloud.io/api/wartas?populate=*&sort[0]=createdAt%3Adesc&pagination[start]=0&pagination[limit]=1`)
            .then(res => setWarta(res.data))
            .catch(err => setError(err.message));
    } , []);
    
    if(error) {
        return <div>An error occured: {error.message}</div>
    }
    
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return(
        <Flex margin={20}>
            {warta.data?.map((warta) => {
            //todo search : on a word
            const annnc = (warta.attributes?.Pengumuman1)
            const annncs = (warta.attributes?.Pengumuman2)
            const rb = (warta.attributes?.RembugWarga)
            const pt = (warta.attributes?.ProgramKegiatanPembangunan)
            const anncp = (warta.attributes?.PengumumanTambahan)
            const doa = (warta.attributes?.DoaSyafaat)
            //const contents = (warta.attributes?.Content)

            const an = annnc.search(':')
            const ans = annncs.search(':')
            const rbs = rb.search(':')
            const pts = pt.search(':')
            const ancp = anncp.search(':')
            const doas = doa.search(':')

            const annc1 = annnc.slice(0, an+1)
            const annc2 = annnc.slice(an+1, annnc.length)
            const anncs = annncs.slice(0, ans+1)
            const anncs2 = annncs.slice(ans+1, annncs.length)
            const rbb = rb.slice(0, rbs+1)
            const rbb2 = rb.slice(rbs+1, rb.length)
            const ptt = pt.slice(0, pts+1)
            const ptt2 = pt.slice(pts+1, pt.length)
            const ann = anncp.slice(0, ancp+1)
            const ann2 = anncp.slice(ancp+1, anncp.length)
            const doaas = doa.slice(0, doas+1)
            const doaas2 = doa.slice(doas+1, doa.length)

            const date = (warta.attributes.createdAt)
            return(
                <Box key={warta.id} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                    <Image style={styles.image} src={warta.attributes.Header.data.attributes.url}/>
                    <Image style={styles.image} marginTop={10} src={warta.attributes.Contact.data.attributes.url}/>
                    <Text marginTop={5} fontSize={'xl'} fontWeight={'bold'}>{new Date(date).toLocaleDateString("id-ID", options)}</Text>
                    <Text style={styles.judul}>{warta.attributes?.Title}</Text>
                    <Text style={styles.subjudul}>{warta.attributes?.SubTitle}</Text>
                    <Text style={styles.content}><ReactMarkdown children={warta.attributes?.Contents}/></Text>
                    <Text style={styles.judul}>{warta.attributes?.JudulPelayanan}</Text>
                    <Text marginTop={2} fontSize={'xl'} fontWeight={'bold'}>{warta.attributes?.TanggalPelayanan}</Text>
                    <Text fontWeight={'bold'}>{warta.attributes?.subJudulPelayanan}</Text>
                    <Image style={styles.image} marginTop={2} src={warta.attributes.TablePelayanan.data.attributes.url}/>
                    <Text style={styles.judul}>{warta.attributes?.JudulPelayanan2}</Text>
                    <Text marginTop={2} fontSize={'xl'} fontWeight={'bold'}>{warta.attributes?.TanggalPelayanan2}</Text>
                    <Text fontWeight={'bold'}>{warta.attributes?.subJudulPelayanan2}</Text>
                    <Image style={styles.image} marginTop={2} src={warta.attributes.TablePelayanan2.data.attributes.url}/>
                    <Text style={styles.judul}>{warta.attributes?.JudulBacaan}</Text>
                    <Image style={styles.image} marginTop={2} src={warta.attributes.TableBacaan.data.attributes.url}/>
                    <Text style={styles.judul}>{warta.attributes?.JudulInformasi}</Text>
                    <Image style={styles.image} marginTop={2} src={warta.attributes.TableInformasi.data.attributes.url}/>
                    <Text style={styles.judul}>Informasi Ibadah KRW</Text>
                    <Image style={styles.image} marginTop={2} src={warta.attributes.TableIbadahKRW.data.attributes.url}/>
                    <Text style={styles.judul}>Jadwal Ibadah KRW Bulan ini</Text>
                    <Image style={styles.image} marginTop={2} src={warta.attributes.TableIbadahKRWBulanan.data.attributes.url}/>
                    <Text style={styles.judul}>Warga Yang Berulang Tahun Bulan ini</Text>
                    <Image style={styles.image} marginTop={2} src={warta.attributes.TableUlangTahunMingguIni.data.attributes.url}/>
                    <Text style={styles.content} fontWeight={'bold'}><ReactMarkdown children={warta.attributes?.Catatan}/></Text>
                    <Text style={styles.judul}>Informasi Kegiatan</Text>
                    <Image style={styles.image} marginTop={2} src={warta.attributes.TableInformasiKegiatan.data.attributes.url}/>
                    <Text style={styles.judul}>Informasi Tambahan</Text>
                    <Text style={styles.judul}>Berita Kelahiran</Text>
                    <Text style={styles.content}><ReactMarkdown children={warta.attributes?.BeritaKelahiran}/></Text>
                    <Text marginTop={5} fontSize={'lg'}><b>{annc1}</b><ReactMarkdown children={annc2}/></Text>
                    <Text marginTop={5} fontSize={'lg'}><b>{anncs}</b><ReactMarkdown children={anncs2}/></Text>
                    <Text fontSize={'lg'}><b>{rbb}</b>{rbb2}</Text>
                    <Text  style={styles.judul}>Jadwal Rembug Warga</Text>
                    <Image style={styles.image}  marginTop={2} src={warta.attributes.TableRembugWarga.data.attributes.url}/>
                    <Text style={styles.content}><b>{ptt}</b><ReactMarkdown children={ptt2}/></Text>
                    <Text style={styles.judul}>{warta.attributes?.TitlePengumumanTambahan}</Text>
                    <Text style={styles.content}><b>{ann}</b><ReactMarkdown children={ann2}/></Text>
                    <Text style={styles.judul}>Doa Syafaat Dalam Minggu Ini</Text>
                    <Text style={styles.content}><b>{doaas}</b><ReactMarkdown children={doaas2}/></Text>
                    <Image style={styles.image} marginTop={10} src={warta.attributes.Penutup.data.attributes.url}/>
                    <Text fontSize={'lg'}>TETAP DISIPLIN DAN MEMATUHI PROTOKOL KESEHATAN DIMANAPUN ANDA BERADA</Text>
                    <Text fontSize={'lg'} fontWeight={'bold'}>PHMJ, {new Date(date).toLocaleDateString("id-ID", options)}</Text>
                </Box>
            )
            })}
        </Flex>
    )
  }