let input = [
    "GGVGlqWFgVfFqqVZGFlblJPMsDbbMrDMpDsJRn",
    "LwzHtwdLHHwDrzPZzzsJbJ",
    "wdLTBvSvHvZVGCjhfN",
    "HsSSnZVHjjssZnJpSJjBHHWgQGcgqqQLQdQFqNgWgqGNDg",
    "rmmRwrtfThtTrbCrGGGcLBDTqDBNQLdL",
    "mwPrrbzPfwvbzhwMMnnjHnBjZlnzMM",
    "gjjdMBgdqdTpJpBcjgRRRlqnvrqfnZtrtZDw",
    "zHShWLhCszCWHVbVzQWCPtQvNZRwtfftfNnrnftlfR",
    "PzPSssHbVhCLFMJFcMFJJMjdJw",
    "ZqJdtpfpjmpJjpnwWdttTCDLLTQFNTzTzrcqrQqc",
    "MsSlBGvBsSGGSlbGsCgggNTgzNLczFQNrNQVQcFzFF",
    "sGHHSGllhvMGhSRGCjtjtjnjnnmHWpWWtJ",
    "tMdjQlHPHsGjsCtsCpwwqfhfnnFMDMrpfD",
    "SbNvWvBRJRWwFSgppgSrfg",
    "RNcNbvzJRcVLRVzTRFLjdHCQttdZdPlHstPl",
    "QWqgpdBflpHNCNWNHHPm",
    "VVMbbJsLFVMhrMJMmRjFNHwHjjCTGSSRFj",
    "mbMsZzsLmVhJZrcLcJhLMtnqvBnZdggplDffvlnlvnDn",
    "prnNnsFnZpnBNdNtFrNnzNQQwTTQZqTHTQJQMwHDMDlZ",
    "jgfgcSmbLmhmcPShghRdmwJTQjTlqGlJQJHqQqGHqQ",
    "hRVhPfbCgbVggLVRSSmRhRPhrrrnCzzsvCvrnvFnNppsvBtd",
    "QJLNDWSWQdLFFFhLdt",
    "npHhHMsfsjpZjznRtmrMCdBwFBFrBdmt",
    "HsjHqRRfnnHRsgfHffZspgzqDGQSWbQTDNGhQhSqNPhDWWbT",
    "bsCmFDsGZCNsDmLDLZBSHSJTHnrZQMQSSQ",
    "jqRpwvfqnnRQrftdBMHddB",
    "phpchwpzjpvwRzwcsnlFsssPCCGzDlsD",
    "rMqzVQfrfVZWZhTdRTQL",
    "cgmtFtjFFJDDtFvSFRZdLlhpHZddmwTZWh",
    "FbcSTtctcvFTJNgtJDGNPnCqMPMfMBfznGVsrMCq",
    "wLJfGJJPZLBfwSLGHbqmhhDHHhFDzfhv",
    "FsnpFjVjplTQCspNlCDbzhMMbqvMvsgmHDqb",
    "lRdlTdTddllpRQFRltVVdFRcwrtrcWWcPrrWPrPSrZWLPc",
    "VGVZhTppGTfPnJVJrFqbsmbSSshHqWqRHF",
    "llzDCzlBLdNcCddlMMNBdCCtWHbFqFRRRsHjWtRwSWqbmjWm",
    "NbcMBBvzzMQLCDBVTQQPVrPQPPZVPp",
    "cdcgfmQdqlqhzzPjzfwpwf",
    "GLBGBDvbvRzGwtnnmPpp",
    "ZRCZBRFSRvLRLFvvbLLFQdHMTHTlQlNqNmqFlWdH",
    "vzjzvHtcHvJcDStLLGSShCbbfF",
    "MWFFTVZRMmMgdQdSQLwQrQwbGw",
    "gFTmgmVZssRsWZRNzJlBHHnnJDvzNPlP",
    "rHrvHpmHZfdGDDGGZd",
    "cTlMsNhllMhGchNPCBlhMQgVDdgDSSWVbWVwRQwRSgbV",
    "lnBjnNNTTMnCTcChPNhMvtzvFGLtJrjFtHHHzHJm",
    "lgpdZZMmGVVzVZzt",
    "HfHLrHqbPbzJJzRJJPTl",
    "HsLWWbDqFrqlqfbsbDqDBncpgFmmvpnmmgpvdvjcdM",
    "GpNVbTpJJNvMBMVvJTGvhnWQQScllnhhWlhVSznV",
    "ZjswwHHLZzGnjWjSjl",
    "sHdftLLtgLfwdtPmHtMbNpMTpNqGRbPvTqPv",
    "sHSNNhNwsllGSGGlWSGWSsFrrVbQrdmFrVrrmnrHmrHr",
    "QQMRZDDRcrcnmRcV",
    "fJfCPMJCzTMZSGsWwsWBwqQf",
    "HwQZZJsHdqqsdJQGRgCgVGgSqgpcGG",
    "ljWWbnPhjBlGpCRCnScSGg",
    "hrrztWlbPjltjMPSdJDZSsHttwsZwD",
    "VzzbmzvpvNhvBDqc",
    "QHSJSQGCwJCGrGQjjcgcBFhdgqdqFdDNNw",
    "rCGJtZrHhhtLRsth",
    "TMWwCLPpMTThrvtMRJjbjRvmJs",
    "fDzcHFfSfFQfZzZRJbdmmqqssqtbSW",
    "WWgGZglcllgPBBCBNVGPNr",
    "wrwwhpTpbqhqrshrrfrFfwfzRJGdNJHNmcFzCCzCRJGzGR",
    "vMggvjQvgPvQjVLMMPSZqWNJGCzcNGdcdzHPPzcmCzPz",
    "qDZWvBZVfDhbTtrp",
    "LpDvHdjVghnjbGrn",
    "FBBBPwwlBlwSfFTWPHPWWhmgngmmnPnmbsngngbGrb",
    "FwftBSCSfWCtwfVQDvHHCMVvdQLQ",
    "ZrQpQlSpNlqQCVnQBmdDqmWDqmWWBDBB",
    "HsZMsJvZzLMHTRwWhgDwmfDBgdhWdf",
    "RZvTzJGzRjFrVNVjlQrS",
    "mqjMwfqlSSPmSrlPhwhVpGRcppWcpcGRcGWv",
    "ssJDJJNgZNDWrRWcRpvr",
    "ZTsTnnsLJQgPnfMwmnMrfm",
    "qsVBvZqWLdfbfvLj",
    "mPNRgmHBBGQrCbSbrdfCCSbC",
    "PlQTGcTTcgGFQQGPTGllpqMzwzpVJZwBMssZ",
    "FWGcNRLRLhwJJQfV",
    "nzbzlDBHSpTDbpDpzHwCqhqwJJghQqQMCCBw",
    "JnzndzpmJFmNsrrFsc",
    "gmRwwDwfnRDJgwZLFQFFNGNQrFBmFbbm",
    "CCVHVWWThSrjVGvbNj",
    "WpdqpplppHCWzlClMMTTZJcJsdscJLLdbDDfZDgL",
    "VNtCCMDllpBqDvtdCczTSgjHlzGSHSGZTZ",
    "hPFPsQhhFhLnbsRnLFssdzcHdsSHSSHgjzHG",
    "QPWPQrPPmbdnbWLFPrrBVrVDBqqNMVwttDtBvD",
    "PPNNRggwgRRgHBhDtwhTwbDs",
    "SFGSFSMCJFMrcrCMSSsbtrTbbZhBvtHhrTHD",
    "MFfSMpflQLQflfLjnLmddsLdddqq",
    "RcgbcrrFscVrwZVCgVGGmHppNNndWnGdNqddqqNqND",
    "jTlSTBSTjLTvlvjjPtvMLlhHnftphtDFNFqDnDHWNddn",
    "QBMQvzzjzvJPjFQMmwZJrgmCCJVRVbbc",
    "CzPJsWCpvsNszsJsNsHlDhMrrJGjhrRVhRGgDDjG",
    "tFFdbqFLFdwctQdfVhjRRghTcrjVRTDW",
    "bwQtFLdLBdFmwnHnWHPBNnHCnp",
    "CNTstGNslRRRstlmNmmTZZqfFwtqgwqgfBPSwSWwqgWq",
    "hpDbcHbpSrcgqqzhhWVfqg",
    "DDcLDjbMjCSsZRNlMv",
    "MhHMCMNbzbMHlcqmGmrmWc",
    "tnPggdZPBPgdtttJpdnwVBnmqQcvlQrQlfGqmfWffBcqWD",
    "VPPwPPLPwLGFGLzCbG",
    "rqBcBmjHTGfPbcVgPG",
    "dlDpsdshzlldlDvsWlWvLQbQBbfLFLbPvbBGQBgG",
    "BlBznnRWzlphphBnhZjZtNNCNmrNqjCqHwHN",
    "mQBvmvBmmLJvvrLtttQrfhGlcRGfRhVGWJVChlRG",
    "MzPswTsbTPPsNgMNszgzMpbMfcRcGflVGRfWSpFRlWWWFhcC",
    "bcPsTbgbbTTwNZzTZzvdjdjtQQndZvdrvdmZ",
    "hQzTQJFFZJrcdcdZFFrGFSVWVRWRwRgRHVMWDCDSWc",
    "lPmpNBnnnsNBnLnfbfnCDWMvwRvDCCMPwwHWvM",
    "HpjmffNlnqqhddTddFZjGJ",
    "BwsLFFbHLbVCSCSFbsbFLsJbqnTtZrRMHTZtrTrZTcRRRRTq",
    "lGhNhpPmmhpztZTBrcpjRqpB",
    "QPzdfzBQNgFJSCwsdLbS",
    "ZsZsSBTgffSCqSSfrMnnMwjqmqmnnnqwMm",
    "bbPPbzVclcPzGNlvzVtmnDBnQmtnQLBjJVLn",
    "zPFGplGGvdPbHplcbzzvdlNBTThgRpCTCTfhfsCCsSRZhR",
    "CVLSVCLVZRsHcnzSRpdZZRCdPlmcMWDDlPNqMqtDMmqPMlDt",
    "TBnGjfQrQJjhfWlPPmPQDNlmlP",
    "fjhhGvjvvrTTBhvTBTbvGVRLzVnbSRZpHddspHRzLs",
    "DDtWjfRfftWMLzSQjzzhWjjwRVPHqFbBbZHVwZBFvFwZvZ",
    "JGllgCJlJsrCGPrCNTPdslvZVVNVbvBqNbbpbbFHpBwZ",
    "CcPdnCdmCJjfcftWhtSL",
    "pgpfddDGHWzDNGNGpRCQjCTFHZZQFQjcRT",
    "bJlhqmMvnlrRQFtTthPVhZ",
    "lvbJrlJMBwfzGNTddB",
    "wpbJGGZpsjvtdWvGWF",
    "HqqhBhBqhhNQHTSHqqNzRHVPvTvddWrjtrjFvrvdTdVP",
    "NRLCRzlqHQtNRBLzQllhhZcgbggwmLDZpsgssDpwwD",
    "pDzFzJFcVMcWJFJFzpLBsqWLZssshsGLGbsS",
    "wqHqfvnfrRwQtdQRthhBbBbZLhPLnBTGsh",
    "CfQqlqvtfHNvMVmzmmMCFDMc",
    "GcgpNHvcSNvpSLphdhsLdQTsdWThhQ",
    "wwzttPrrhQswdhnT",
    "tjJjMJRbRbjztmjtjbgcRsNlgglHpDFSlSvg",
    "VVLvLqqPVlvcqLLdwLbHpzcHSsbRJppHbHpF",
    "CfjjCNGmMWhWjhWHWb",
    "ZmGZffggrDqZvZtlbTqL",
    "TTmmhvBvvHWzHpsPpstpLVdwwsLb",
    "qflfFgNctNcCnCCNDnfFFNDwrslwZbPswwZbJLJZbrlPLL",
    "FgQDDcncStCgtqccjSDTHWMThvhTQMBQhWvWRG",
    "SqhVghPccSBhgSBqWBFNQNsHQHMjCCQQWCwQHN",
    "fLZftnlttcbbtZbZlpZtttQjwsCQjRwwRDQspMRMNNQs",
    "TfLtvbJtZmlbTTTtlJbFvVqPSgBdPqPhFSGBcd",
    "pPPNDptcqtpcDztLDhhngnnJgJTmJwNnwm",
    "HVVCsSClHGBCHslWHbSCGGVngTrJwnnJnQRRBrhQhgJhdm",
    "WTWWWsvVlvGbWCFvjDftPpjqZLLtDz",
    "wWclwtDwRvflvffB",
    "sMMsGdsSTMrJZNqczfdvhvnzCnfv",
    "rspppMjMspSTSMpgLjcPFmwPLmPHwb",
    "tCdSMHtHtRFHdWSSJQSgrrrnghTNJN",
    "BGfcvDsfvsqcvqfGvfGnNLhggBNQJNJQmpgQJm",
    "sGfQDPDZzfDZzclwDzwsDlfjtbdHClFRCMWjbMFMRFWbdj",
    "pJNCcvqCccsVvFCpqsmvWJfCBWgSzBBRrrBRDDgDrSbbgQbQ",
    "TMLnLjjffwfwGdjQjDDBjBrDtztRSb",
    "MdPLGhHnMZhlPHHTFfZvVCpmmmcFcVFC",
    "SwFMfCMRCdQDdMbmdFfdbbnlcVncVCcgLqWcNNnCcWlW",
    "hPjQzzhGzhpPrtPJPpPHrVgnqVVncVVnNHlqVnncNB",
    "ptjGrptztpthtrtJJhTsGwFDZZDQmSdfZSwsRZSwfZ",
    "rSSWWCWrdllHWpjcnFNnRCNjQp",
    "bGwwJqGVGbGJVVhgbBgttGmBQjFsMjpMcMnnMBcQFNnsssvv",
    "bfthwmfJfgwwmmwZqVJPHNHSZHWzSlDPrdDdSH",
    "nmJccvclcbwmlbbvVbvsHwJJPCPNCNPnLBhrBPPLBhLhBgBP",
    "MdRGtdDRTqWDMqtMDtQDRWSdLLBsrhLgBCgrgCgNNLPBfNMf",
    "dRZQdDdRRSQWGsjZmwzjmlzsZH",
    "PBGGMrTQTrTBpPQpLpSlwjwfjtlnfwbmGttw",
    "fCsJCWJcvRCtwwjbCl",
    "NsqcsfcvDHFVDJvdLQTrpdTTzTPpHr",
    "rltrwsBTlrfGZggGBLGGNN",
    "jhMnRQJVphMnbhvQjDZNqqZDNTNHZVHGHq",
    "MRvbhQRQQChpvbjvMSvQnMcsFsfwwmlCwFwWcTWwrmPc",
    "DDvLLLBnvrzvbvbmtv",
    "TMwRjTRMGCwGGwrjQQnmrQrrQdhZ",
    "MJPFHFTwgCGqGqgJMGDfSWcsnBSccgVDlnpW",
    "flzVzNrdLNLJzrGlfdlzjrQDgFTpDgDmmmgFmqFDQjQh",
    "CbnBcsZnPZVSnwvVsZbRhhBDpgFphgmgDgTppq",
    "ZWnsWSnncSZsntZCbsswwJMzdLzlMdNMLtMVfrllMt",
    "ZffSgNfgJgGCHZcZrpHrNJTLhqvSLTqQnvVTLvzvLTjV",
    "tWFtHMwlBlDqjjzjnqvvlV",
    "DRMPDtWHPFDBFFwWMFBmFRPgZpJfsffNGJNrGcsprrsmfg",
    "wRZRmpZmlPqZjzGrdrGq",
    "bBhQQFPQbPDVNzVNzdGWNdrf",
    "QFbcDcDbLHgHBPDFRsSSMtmvRttMpCLS",
    "MpWJVVJMcWvpRShcwpLGflmqzSfNdfNLdQzN",
    "CDBTtCgtbjgCRrBrPBTQqzflNqjGdLzzmqffzq",
    "rFgnnBbttDTPtHCDPrPMnpwVJhJvMZvpMvppRZ",
    "sWTTmpsfsWppPTTsTVZWHVVZNvVcdcJvdN",
    "DjjBzjhRHvvvSzdc",
    "rMBjjrjbjrGDlgMlMrGjBgRLPTTwHMsfnFwFQPMPMnmFFm",
    "QRRbDjjmPzNQwFDNmrQmzCbVHrMhBVrJLJJfMGGLtfJBHh",
    "dsWcsqqWSWvnWnWcWGPJLBqhLBqGhBJHHH",
    "ZWnPWgWgPnlbCDDwmmDbRZ",
    "nfPqqfLqQnfHBSqnzztQjVmjfGRWJNGRWsJWJfmJ",
    "TTMlMMlFDMGVGRsVJH",
    "CbDbFDbvgTFFwgTDlDprhlPSqBzSnPdLPtPPHgznQqBQ",
    "fJmWVfHqjfjhZCQZ",
    "NcNzBNvgszQmzjnthZQC",
    "LsLsgBNFmFgTFgGBBgcdMdvPDPDJWrlpVbGpJWqHDlHJHD",
    "SllDdvzgdFDdlPJvbFDDSzFScPTRTNcwfZRwRhcwwNnRZTtf",
    "WBpWBCLGVpLjHrHGGVhZNwcTVcNhVnRcNZ",
    "LHLQLspHWQGpWCHnBvdzDJFlqvdsqgSgqS",
    "GcTctDMjMhpMDRjLsMMsfDWFfdPCFNbnCPnvCPgW",
    "JmvwqlBwnmfdFPFP",
    "SvZqHSZqqHZZZBlllBwSwsRsMHpLjpLsMGtsMspGRT",
    "ClLnCLfClLVllfLLcQjLBCfCmSHVsttsmtsVStDNVdppdsSp",
    "PFrRMbWqMRwFRqRSqwqvMvMsGtgsdmssrgNtdmpNdDGgdt",
    "bwJbPWPwFFPFSczCZzZZCcfjBJ",
    "MwmBmzwJQTcTmfPVfZPwhhwHPH",
    "jlnrglFLvbrGRFGnvFZdNNFfPZddPThVhdPH",
    "RjbjpgbnLGvpLgzBqBpmWmmzqTMS",
    "FnsSpttPnPbNCFDtsPnFHQZTQZgcwgDDTfrfTHMZ",
    "mRjzRzlvBvhjZrQmMMwfZZNN",
    "ldzddlzLRlRWdhjdRLjhRWtJbJbNtJJpJPbCbGCWNG",
    "wBwmNZBTmzzcVcmpzZqdMgPjnLSVlPgDPdbMdg",
    "flJvGtHffHDddddbHjnb",
    "RstrhfrhhRGFQtRhtftvQhvFZpsmpWwNlWqcWTccBNWswqNp",
    "DPWhbzDlQLLlQbLDlLhPhLFNNJqCFGqnNJCCSCnGPnGN",
    "wvwjtvtdwfssvSJgFFvGGSCFcp",
    "mtdrZwwJsrtddrHRtZWbVThLlBzVTzhHQWhB",
    "TsRRWctsTJMQZllggc",
    "zDvhpbprgGvpvVlVQlZpQMJVlQ",
    "rrrvFvGCDhDSrrrvChCgSstBNTSftWBjTdfWBN",
    "JJdssBcLVGrgbBHWrH",
    "QZTptvmvmlZpRDlMMMZCQvnjjFnrjWGFbjnrnFGWgZrz",
    "TMRplDMggtwlppTlvhsJJqdcqwVPSSNcLd",
    "JjTCCrcRvccPLmMP",
    "NfGFPZlNnwBfPlbbbQZGqLHgzLghSmMBzSgvzmDMhv",
    "ZfbnNQpQnZGlGlGpWTddjdTJdpRPTrCj",
    "gWLblMMggdWsdRJlblMRMMqWDvPvcPPPccJPJVTZVZThmcDP",
    "rQFfGfrCHrjnrtNTcPShTSPvvVLtmm",
    "fQrCfLrpLHnCHwslqzqsslswzqRW",
    "zpJtGlJPMPTlTjGJCDGCDljpdnvhhWnZnZnDwwmvnWDWWvdd",
    "sHrVrSrRRRLNgLVBqSsZmWwvwcvwZjmwngmdbn",
    "QsQQBrrLHTjPpTQzzP",
    "JDlzHHzzptRDmbTMrrVQ",
    "dRRNqnCBnmrQsVQQ",
    "wFPCBNFgwjPwhgFNztftpJRPpzRvvHtZ",
    "DlBhrDBPPwMWwhWchW",
    "ntSqbbSJFJNqzVzjCfMvfSlSRWccRL",
    "mVlHtNVtqldbJVmNHmdTTBBgrQQgGsPQdrDgsP",
    "HWHNbBgvNLdcvQMnSf",
    "wqqqVPDPhqwszFwrrszFfMdWthLcMdfhthSQfJSt",
    "qVPVwTzFwFDpDrPDzDPFDPlCHjBGjTmZGjbWWGZBRTNjjH",
    "GVgdWjllSqgjdgHqqlfmhwcpwCzhvZwMcScv",
    "nsJQbLRQsNnzQDQQPPBbRBRhfZwpZcvwpvvmLCcvpcmfMM",
    "DRJtnnRbBBnPztsrPzRBPbsFFHqqVrqggjFWqrgWjTGgFq",
    "hhZJQPJFHGGlcWWslpNN",
    "VwwwJjvwMtrCnwjDNDzlfscWszWW",
    "nVStCrMqbVwqVqSqwnLPhTJFdRgJHZSFRLTP",
    "vPgMbbRhhvMvNjjLWsWQsHQmHwBrmmBzww",
    "tFctDnVFpppHVBTdzdTQwl",
    "FtSFqSptfJCqqJStZCqDpDJMhvLLgLMgQgjgGZgGgMPLZg",
    "zwsWgSGWLSVhPWhtLgLWhPVNQTmDrDQttZpdQtdpQDDQZQ",
    "fjCHcvvjMDrppCQpVV",
    "VMqRnVJMVLPzbRWhGh",
    "mjRmzQlzDzNHWwDZ",
    "FBfJBGqnnpfSVGnpJbJVfNtCsJHWZvrsNJCZrCNsvN",
    "fZPBnfPqSBqdfpFbVnVSjgdcLLgRLjmgRhLLghlR",
    "FSFnTcppdQtnnDhtzDfg",
    "ZLGVmBLBVwZCVjjGqGhVwVVgzzbMDtNNvszMmMffNDDvtM",
    "VZPJjBZVqBZZBjqwVqllpSTphhQFPShWSQcW",
    "hTRdcLrCLgplLvBFGvlL",
    "nZDZqzbDbDzRZtVNDzDWGwslsllBFpnlpGvJssFG",
    "zbqjNWQVmVPrrRjRdRhS",
    "VpNCbVHlHHZfflVfmchctqFcqQQjZmZM",
    "WDSRGgsSvgJSRrnWgqQhmjBqmhqrtLqmQm",
    "znSGTgDJnsDGzgwCwlpbCNwHzVtl",
    "sTTTrpHFFFqTnQbbvfJdDzHHDLVV",
    "CjMtgMgRvbPfjjvB",
    "mhMvlhhWClvqshNTQQqsNN",
    "tWFtFBzbwdFrpmdhdm",
    "qTqDjJjJQQqMjTDLJjNqNqPNdmpcSmhdmhhmcrWZpdPGddcc",
    "RjNQLJNTTJDDJRHHjQqnMWtlvvVvbtBvRVzgzgwgVg",
    "CGdQjwdJrbBmpmZZZlRWcb",
    "NgtMPVstgSzBLzhgzgLgDRlcmDWRmlZvcSmDSvvp",
    "LhNsgPPLFPPsNzMhhVzPsGJBFqwQGfnqfQjdGdGfwr",
    "CNbNdbzjCZpPNzjmzjsCMRJvnnMRGnsvJGRs",
    "wrtdwTLWFcFWdFgwRRsnJGnGfTGJfMsq",
    "FttcwgBtgVLgPldQSNZBzBpz",
    "DjRZrrRmttRFDvDrFTZsnWnHVSTSSJVZJH",
    "dNNhLqlLLqdCzfMMlCfSncTVVWcHdcVsVdSVnT",
    "QqppMfzMfqWCwbRQrwFrrttQ",
    "dwGjHrtjsdhfCHnPSpfMfDPpPDWS",
    "lmNzzlLbFqcqNgzpWMSvbbvDQDGWDp",
    "LBmglgmqBqmrwCGhCjVtBC",
    "tvHgWZCCprlgpWglCtjPhLmPmhVdJFSzVzdJVmmQ",
    "fBnTTnNNBnwfnNqcBbBBTbGJQQJhSSdQJJsmdJFSQGSmVV",
    "cMcDwFbRfFRlHCRCZrrp",
    "ZFWmgghzBgwgjWBzjzmRWWMmsVwnVrsdVdwNrrpnnVrPCnCP",
    "GLLbtGqllctqvGJvSlQbJGsPnVdsdpsTPLsVppBCTVss",
    "tJBStGSvctvDDfczmRgRZjzDjZmgzH",
    "FMrLmsQQSWzCZBhpQJTQQZ",
    "dPPVncVvPBJDCPhwJD",
    "fvHbbVHvqnvvvBzgLbbGGmrbMr",
    "mrZzrzqDrhZqDddSFrCGLLLPQPQBJPJJBnQq",
    "TgbpGblWlMsjgWlgMfpNRgbRHHBnHHHtLpCJPCPBnBLJtQQL",
    "sbTlblTlvRbbGblbFcdDzccVcDVvzzzd",
    "zMzfzlGwSBMMSCMzhsPgfcPcfcbhjQPt",
    "FHHqJVdJmFmdVrJdJppthscjGtqRPRcccgcQbR",
    "rvNJJpLrvvLnJvNFFvZZZBWznBWGSDCMnCwz",
]
input2 = [
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw",
]

let result = 0;

const letters = [];
for(let i = 0; i < input.length; i++) {
    let left = input[i].substr(0, input[i].length / 2);
    let right = input[i].substr(input[i].length / 2);

    let set = {};
    new Set(left.split("")).forEach(c => set[c] = (set[c] || 0) + 1);
    new Set(right.split("")).forEach(c => set[c] = (set[c] || 0) + 1);

    let matching = Object.entries(set).sort((a,b) => b[1] - a[1]);
    letters.push(matching[0][0]);
}

console.log(letters);
console.log(letters.map(c => c.charCodeAt(0) - "A".charCodeAt(0)).map(c => c < 26 ? c + 27 : c - 31).reduce((a,b) => a+b));

// Part 2
const letters2 = [];
for(let i = 2; i < input.length; i += 3) {
    let a = input[i - 2];
    let b = input[i - 1];
    let c = input[i - 0];

    let set = {};
    new Set(a.split("")).forEach(c => set[c] = (set[c] || 0) + 1);
    new Set(b.split("")).forEach(c => set[c] = (set[c] || 0) + 1);
    new Set(c.split("")).forEach(c => set[c] = (set[c] || 0) + 1);

    let matching = Object.entries(set).sort((a,b) => b[1] - a[1]);
    letters2.push(matching[0][0]);
}

console.log(letters2);
console.log(letters2.map(c => c.charCodeAt(0) - "A".charCodeAt(0)).map(c => c < 26 ? c + 27 : c - 31).reduce((a,b) => a+b));
